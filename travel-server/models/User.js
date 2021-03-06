const bcrypt = require("bcrypt");

const db = require("../db/index.js");
const TokenService = require("../services/TokenService");

const User = {};

// a little involved
// mostly the same as express
// with the exception of inserting the token into res.locals
User.create = function(req, res, next) {
  const user = req.body;
  const passwordDigest = bcrypt.hashSync(user.password, 10);
  db
    .one(
      "INSERT INTO users (fname, lname, email, username, password_digest) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
      [user.fname, user.lname, user.email, user.username, passwordDigest, 0]
    )
    .then(data => {
      // remove the password_digest since it's sensitive
      const { password_digest, ...userData } = data;
      res.locals.user = userData;
      const tokenData = {
        username: userData.username
      };

      // pass some bit of data into makeToken
      TokenService.makeToken(tokenData)
        .then(token => {
          console.log(token);
          res.locals.token = token; // pass the token into res.locals
          next(); // calling next()
        })
        .catch(next); // call next with error object
    })
    .catch(err => {
      console.log(`User Create failed: ${err}`);
      next();
    });
};

User.findByEmail = function(email) {
  return db.one("SELECT * FROM users WHERE email = $1;", [email]);
};

User.login = function(req, res, next) {
  const user = req.body;

  // do the normal dance comparing password / password_digest
  User.findByEmail(user.email)
    .then(userData => {
      const isAuthed = bcrypt.compareSync(
        user.password,
        userData.password_digest
      );

      if (!isAuthed) {
        next();
      }

      // put userData into res.locals
      res.locals.user = userData;

      const data = {
        email: userData.email,
        id: userData.id,
        fname: userData.fname,
        lname: userData.lname,
        username: userData.username
      };

      // and pass it into makeToken
      TokenService.makeToken(data)
        .then(token => {
          res.locals.token = token; // set the token on res.locals
          next();
        })
        .catch(err => {
          next();
        });
    })
    .catch(err => {
      next();
    });
};

module.exports = User;
