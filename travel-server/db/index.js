//Set for pg promise
const pgp = require("pg-promise")();

//configuration object

const cn = {
  host: "localhost",
  port: 5432,
  database: "noWander"
};

// if we're on keith's machine
// add a password
// lawl --Drake
if (process.env.KEITH_PASS) {
  cn.password = process.env.KEITH_PASS;
}

const db = pgp(process.env.DATABASE_URL || cn);

module.exports = db;
