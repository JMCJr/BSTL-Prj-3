const axios = require("axios");
const db = require("../db/index.js");
const noWander = {};

noWander.allActivities = (req, res, next)=>{
  db.manyOrNone('SELECT * FROM activity')
  .then(activity => {
    res.locals.activities = activities;
    next();
  })
  .catch(err=>console.log(err));
};


module.exports = noWander;
