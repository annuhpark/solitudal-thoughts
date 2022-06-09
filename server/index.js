require('dotenv/config');
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'public');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const uploadsMiddleware = require('./uploads-middleware');
const authorizationMiddleware = require('./authorization-middleware');
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
app.use(errorMiddleware);

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
}

app.use(express.static(publicPath));

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

app.use(authorizationMiddleware);

app.post('/api/groups', uploadsMiddleware, (req, res, next) => {

  const { nameOfGroup, description } = req.body;
  const { userId } = req.user;
  const sql = `
    insert into "groups" ("nameOfGroup", "description", "userId")
    values ($1, $2, $3)
    returning *
  `;
  const params = [nameOfGroup, description, userId];
  db.query(sql, params)
    .then(result => {
      const [group] = result.rows;
      res.status(201).json(group);
    })
    .catch(err => next(err));
});

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
