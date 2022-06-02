require('dotenv/config');
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'public');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const jsonMiddleware = express.json();
const ClientError = require('./client-error');
const authorizationMiddleware = require('./authorization-middleware');
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

app.get('/api/hello', (req, res) => {
  res.json({ hello: 'world' });
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

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
