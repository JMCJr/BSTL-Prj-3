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
  .catch(error =>{
    console.log("error encountered in noWander.allActivities. Error", error);
    next(error);
})
};
// ----------------------------------------------------
// middleware
// noWanderModel.getAllItineraries
// This is _______ job
noWander.allItineraries = (req, res, next)=> {
  db.manyOrNone('SELECT * FROM itinerary')
  .then(itineraries =>{
    res.locals.itineraries = itineraries;
    next();
  })
}.catch(error=>{
  console.log("error encountered in noWander.allItineraries. Error", error);
  next(error);
})
};
// ----------------------------------------------------
// middleware
// noWanderModel.getOneItinerary
// This is ______ job
noWander.getItinerary = (req, res, next)=>{
  const id = req.params.id;
  db
  .one(`SELECT * FROM itinerary WHERE itinerary.id =${id}`, {id : id})
  .then(data => {
    res.locals.getItineraryData = data;
    next();
  })
}.catch(error=> {
  console.log("error encountered in noWander.getItinerary. Error",error);
  next();
})
};
// ----------------------------------------------------
// middleware 
// noWanderModel.NewItinerary
// This is ______ job
noWander.createItinerary = (req, res, next)=>{
  let{name,city,date_departing,date_returning,budget} =req.body;
  db.one("INSERT INTO itinerary(name, city, date_departing, date_returning, budget) VALUES($1, $2, $3, $4, $5) RETURNING id",
    [name, city, date_departing, date_returning, budget])
  .then(itineraryId => {
    res.locals.itineraryId = itineraryId;
    next();
  })
}.catch(error =>{
  console.log("error encountered in noWander.createItinerary. Error", error);
  next()
})
};
// ----------------------------------------------------
// middleware
// noWanderModel.NewActivity
// This is ______ job








// ----------------------------------------------------
// middleware
// noWanderModel.deleteOneItinerary
// This is _______ job
noWander.deleteItinerary = (req, res, next) =>{
  db
  .none('DELETE FROM itinerary where itinerary.id = $1',[req.params.id])
  .then(()=>{
    next();
  })
}
// ----------------------------------------------------
// middleware 
// noWanderModel.deleteOneActivity
// This is ______ job
noWander.deleteActivity = (req, res, next) =>{
  db
  .none('DELETE FROM activity where activity.id = $1',[req.params.id])
  .then(()=>{
    next();
  })
}
// ----------------------------------------------------

module.exports = noWander;
