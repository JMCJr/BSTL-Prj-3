const axios = require("axios");
const db = require("../db/index.js");
const noWander = {};


// ----------------------------------------------------
// middleware
// noWanderModel.getAllActivities
// This is _______ job

noWander.allActivities = (req, res, next)=>{
  db.manyOrNone('SELECT * FROM activity')
  .then(activities => {
    res.locals.activities = activities;
    next();
  })
  .catch(err=>console.log(err));
};


// ----------------------------------------------------
// middleware
// noWanderModel.getAllItineraries
// This is _______ job








// ----------------------------------------------------
// middleware
// noWanderModel.getOneItinerary
// This is ______ job








// ----------------------------------------------------
// middleware 
// noWanderModel.NewItinerary
// This is ______ job








// ----------------------------------------------------
// middleware
// noWanderModel.NewActivity
// This is ______ job








// ----------------------------------------------------
// middleware
// noWanderModel.deleteOneItinerary
// This is _______ job








// ----------------------------------------------------
// middleware 
// noWanderModel.deleteOneActivity
// This is ______ job







// ----------------------------------------------------

module.exports = noWander;
