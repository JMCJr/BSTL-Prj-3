const axios = require("axios");
const db = require("../db/index.js");
const noWander = {};

noWander.allItineraries = (req, res, next) => {
	db
		.manyOrNone("SELECT * FROM itinerary")
		.then(data => {
			console.log(data);
			res.locals.data = data;
			next();
		})
		.catch(err => console.log(err));
};
noWander.newItinerary = (req, res, next) => {
	console.log("OOKKK", req.body);
	db
		.one(
			"INSERT INTO itinerary(name, city, description, date_departing, date_returning, budget) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
			[
				req.body.name,
				req.body.city,
				req.body.description,
				req.body.date_departing,
				req.body.date_returning,
				req.body.budget
			]
		)
		.then(id => {
			res.locals.itineraryId = id;
			next();
		});
};
module.exports = noWander;
