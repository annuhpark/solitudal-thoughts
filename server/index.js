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

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
}

app.use(staticMiddleware);
app.use(jsonMiddleware);

// Groups
app.get('/api/groups', (req, res, next) => {
  const sql = `
    select "groupId",
           "nameOfGroup",
           "description"
      from "groups"
  `;

  db.query(sql)
    .then(result => {
      const groups = result.rows;
      res.status(200).json(groups);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

// Group Details
app.get('/api/groups/:groupId', (req, res, next) => {
  const groupId = Number(req.params.groupId);
  if (!groupId) {
    throw new ClientError(400, 'groupId must be a positive integer');
  }
  const sql = `
    select "groupId",
           "nameOfGroup",
           "description"
      from "groups"
    where  "groupId" = $1
  `;
  const params = [groupId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(400, `cannot find group with groupId ${groupId}`);
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

// Comment
app.get('/api/entries/:groupId', (req, res, next) => {
  const groupId = Number(req.params.groupId);
  if (Number.isInteger(groupId) !== true || groupId < 0) {
    throw new ClientError(400, 'groupId must be a positive integer');
  }
  const sql = `
    select "entryId",
           "profilePhotoUrl",
           "commentId",
           "message",
           "entries"."userId"
      from "entries"
      join "users" using ("userId")
     where "groupId" = $1
     order by "entries"."createdAt" desc
  `;
  const params = [groupId];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows);
    })
    .catch(err => next(err));
});

// Sign up
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

// Log In
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

// Post Group
app.post('/api/createGroup', uploadsMiddleware, (req, res, next) => {

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

// Post Entries
app.post('/api/groups/createEntries/:groupId', uploadsMiddleware, (req, res, next) => {
  const groupId = parseFloat(req.params.groupId);
  const message = req.body.comment;
  const { userId } = req.user;
  const sql = `
    insert into "entries" ("message", "groupId", "userId", "createdAt")
    values ($1, $2, $3, now())
    returning *;
  `;
  const params = [message, userId, groupId];
  db.query(sql, params)
    .then(result => {
      const [comment] = result.rows;
      res.status(201).json(comment);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);
app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
