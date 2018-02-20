const express = require("express"),
	router = express(),
	// the model:
	noWander = require("../models/noWander.js");


// ----------------------------------------------------
// Define GET request for '/dashboard', which is ALL
// noWanderModel.getAllItineraries
// This is _______ job
router.get("/dashboard", noWander.allItineraries, (req, res) => {
	const { itineraries } = res.locals;
	res.json({ itineraries });
});

// ----------------------------------------------------
// Define POST request for '/newitinerary', which is ONE 
// noWanderModel.NewItinerary
// This is ______ job

router.post("/dashboard", noWander.newItinerary, (req, res) => {
	console.log(res.locals);
	res.json(res.locals.itineraryId);
});

// ----------------------------------------------------
// Define GET request for '/itinerary/:id', which is ALL 
// noWanderModel.getAllActivities
// This is Leon's job



// NOTHING HERE FOR NOW



// ----------------------------------------------------
// ----------------------------------------------------
// Define GET request for 'itinerary/:id', which is ONE 
// noWanderModel.getOneItinerary
// This is ______ job
router.get('/itinerary/:id',noWander.getItinerary, (req, res, next) =>{
  res.json(res.locals.getItineraryData);
});








// ----------------------------------------------------
// ----------------------------------------------------
// Define POST request for '/itinerary/:id/newactivity', which is ONE 
// noWanderModel.NewActivity
// This is ______ job








// ----------------------------------------------------
// Define DELETE request for '/dashboard', which is ONE
// noWanderModel.deleteOneItinerary
// This is _______ job
router.delete('/dashboard', noWander.deleteItinerary, (req, res, next) =>{
  res.json();
});







// ----------------------------------------------------
// Define DELETE request for 'itinerary/:id', which is ONE 
// noWanderModel.deleteOneActivity
// This is ______ job
router.delete('/itinerary/:id',noWander.deleteActivity,(req, res, next) =>{
  res.json();
});








// ----------------------------------------------------

// ----------------------------------------------------

module.exports = router;