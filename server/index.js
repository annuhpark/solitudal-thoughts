require('dotenv/config');
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'public');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const jsonMiddleware = express.json();
const ClientError = require('./client-error');
const jwt = require('jsonwebtoken');
const pg = require('pg');
const argon2 = require('argon2');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(staticMiddleware);
app.use(jsonMiddleware);

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
}

app.use(express.static(publicPath));

app.post('/api/quiz', (req, res, next) => {
  const { quizName } = req.body;
  const sql = `
  insert into "quizzes" ("quizName")
  values ($1)
  returning *
  `;

  const params = [quizName];
  db.query(sql, params)
    .then(result => {
      const [file] = result.rows;
      res.status(201).json(file);
    })
    .catch(error => next(error));
});

app.post('/api/auth/sign-up', (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ClientError(400, 'Email and Password are required fields!');
  }
  argon2
    .hash(password)
    .then(hashedPassword => {
      const userDetails = [email, hashedPassword];
      db.query(`
        insert into "users" ( "email", "password")
        values ($1, $2)
        returning "userId",
                  "email";
    `, userDetails)
        .then(result => {
          res.status(201).json(result.rows[0]);
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
});

app.post('/api/auth/log-in', (req, res, next) => {
  const { email, userPassword } = req.body;
  if (!email || !userPassword) {
    throw new ClientError(401, 'invalid login.');
  }
  const sql = `
    select "userId",
           "password"
      from "users"
     where "email" = $1
  `;
  const params = [email];
  db.query(sql, params)
    .then(result => {
      const [user] = result.rows;
      if (!user) {
        throw new ClientError(401, 'invalid login');
      }
      const { userId, password } = user;
      return argon2
        .verify(password, userPassword)
        .then(isMatching => {
          if (!isMatching) {
            throw new ClientError(401, 'invalid login');
          }
          const payload = { userId, email };
          const token = jwt.sign(payload, process.env.TOKEN_SECRET);
          res.json({ token, user: payload });
        });
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
