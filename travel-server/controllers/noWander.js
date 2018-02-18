const express = require("express"),
	router = express(),
	// the model:
	noWander = require("../models/noWander.js");

router.get("/dashboard", noWander.allItineraries, (req, res) => {
	const { itineraries } = res.locals;
	res.json({ itineraries });
});
router.post("/dashboard", noWander.newItinerary, (req, res) => {
	console.log(res.locals);
	res.json(res.locals.itineraryId);
});
module.exports = router;
