//Set for pg promise
const pgp = require('pg-promise')();

//configuration object

const cn = {
  host:'localhost',
  port:5432,
  database: 'noWander'
};

const db = pgp;

module.exports = db;