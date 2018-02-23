const axios = require("axios");
const db = require("../db/index.js");
const noWander = {};

// ----------------------------------------------------
// middleware
// noWanderModel.getAllActivities
// This is _______ job
noWander.allActivities = (req, res, next) => {
  console.log(req.params.id);
  db
    .manyOrNone(`SELECT * FROM activity WHERE itinerary_id = ${req.params.id}`)
    .then(activities => {
      res.locals.activities = activities;
      next();
    })
    .catch(error => {
      console.log("error encountered in noWander.allActivities. Error", error);
      next(error);
    });
};
// ----------------------------------------------------
// middleware
// noWanderModel.getAllItineraries
// This is _______ job

// noWander.allItineraries = (req, res, next)=> {
//   db.manyOrNone(`SELECT * FROM itinerary WHERE user_id = ${req.params.id}`)
//   .then(itineraries =>{
//     res.locals.itineraries = itineraries;
//     next();
//   })
// .catch(error=>{
//   console.log("error encountered in noWander.allItineraries. Error", error);
//   next(error);
// })

//------------------------------------------------------

noWander.allItineraries = (req, res, next) => {
  console.log("&&&, all itineraries-reqparams", req.params.id);
  const id = req.params.id;
  db
    .manyOrNone(`SELECT * FROM itinerary WHERE user_id = ${id}`)
    .then(itineraries => {
      res.locals.itineraries = itineraries;
      next();
    })
    .catch(error => {
      console.log("error encountered in noWander.allItineraries. Error", error);
      next(error);
    });
};

// noWander.allItineraries = (req, res, next) => {
//   db
//     .manyOrNone("SELECT * FROM itinerary")
//     .then(data => {
//       console.log(data);
//       res.locals.data = data;
//       next();
//     })
//     .catch(err => console.log(err));
// };

// ----------------------------------------------------
// middleware
// noWanderModel.getOneItinerary
// This is ______ job
noWander.getItinerary = (req, res, next) => {
  const id = req.params.id;
  db
    .one(`SELECT * FROM itinerary WHERE itinerary.id = ${id}`)
    .then(data => {
      res.locals.getItineraryData = data;
      next();
    })
    .catch(error => {
      console.log("error encountered in noWander.getItinerary. Error", error);
      next();
    });
};
// ----------------------------------------------------
// middleware
// noWanderModel.NewItinerary
// This is ______ job

// noWander.createItinerary = (req, res, next)=>{
//   let{name,city,date_departing,date_returning,budget} =req.body;
//   db.one("INSERT INTO itinerary(name, city, date_departing, date_returning, budget) VALUES($1, $2, $3, $4, $5) RETURNING id",
//     [name, city, date_departing, date_returning, budget])
//   .then(itineraryId => {
//     res.locals.itineraryId = itineraryId;
//     next();
//   })
// }.catch(error =>{
//   console.log("error encountered in noWander.createItinerary. Error", error);
//   next()
// })
// };

noWander.newItinerary = (req, res, next) => {
  console.log("OOKKK", req.body);
  db
    .one(
      "INSERT INTO itinerary(name, city, date_departing, date_returning, budget,user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
      [
        req.body.name,
        req.body.city,
        req.body.date_departing,
        req.body.date_returning,
        req.body.budget,
        req.body.user_id
      ]
    )
    .then(id => {
      res.locals.itineraryId = id;
      next();
    });
};

// ----------------------------------------------------
// middleware
// noWanderModel.NewActivity
// This is ______ job
noWander.newActivity = (req, res, next) => {
  console.log("*****newActivity", req.body);
  console.log("*****newActivity", req.params);
  db
    .one(
      "INSERT INTO activity(name, description, price, votes, itinerary_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.votes,
        req.body.itinerary_id
      ]
    )
    .then(response => {
      res.locals.activity = response;
      next();
    });
};

// ----------------------------------------------------
// middleware
// noWanderModel.deleteOneItinerary
// This is _______ job
noWander.deleteItinerary = (req, res, next) => {
  db
    .none("DELETE FROM itinerary where itinerary.id = $1", [req.params.id])
    .then(() => {
      next();
    });
};
// ----------------------------------------------------
// middleware
// noWanderModel.deleteOneActivity
// This is ______ job
noWander.deleteActivity = (req, res, next) => {
  console.log("***", req.params);
  db
    .none("DELETE FROM activity WHERE activity.id = $1;", [req.params.id])
    .then(() => {
      next();
    });
};
// ----------------------------------------------------
// _____________________________________________________

// update attempts 2/21

noWander.updateActivity = (req, res, next) => {
  console.log("req.body:", req.body);
  let { name, description, price, votes, itinerary_id, activityId } = req.body;
  db
    .one(
      "UPDATE activity SET name=$1, description=$2, price=$3, votes=$4, itinerary_id=$5 WHERE id=$6 RETURNING *;",
      [name, description, price, votes, itinerary_id, activityId]
    )
    .then(data => {
      res.locals.data = data;
      next();
    })
    .catch(err => {
      console.log("error encountered in Activity.update, err:", err);
      next(err);
    });
};

noWander.updateItinerary = (req, res, next) => {
  console.log("req.body:", req.body);
  let { name, city, date_departing, date_returning, budget } = req.body;
  db
    .one(
      "UPDATE itinerary SET name=$1, city=$2, date_departing=$3, date_returning=$4, budget=$5 WHERE id=$6 RETURNING id;",
      [name, description, price, votes, itinerary_id, req.params.id]
    )
    .then(itineraryId => {
      res.locals.activityId = activityId;
      next();
    })
    .catch(err => {
      console.log("error encountered in itinerary.update, err:", err);
      next(err);
    });
};

noWander.updateUser = (req, res, next) => {
  console.log("req.body:", req.body);
  let { fname, lname, email, username, password_digest } = req.body;
  db
    .one(
      "UPDATE users SET fname=$1, lname=$2, email=$3, username=$4, password_digest=$5 WHERE id=$6 RETURNING id;",
      [fname, lname, email, username, password_digest, req.params.id]
    )
    .then(usersId => {
      res.locals.usersId = usersId;
      next();
    })
    .catch(err => {
      console.log("error encountered in users.update, err:", err);
      next(err);
    });
};

module.exports = noWander;
