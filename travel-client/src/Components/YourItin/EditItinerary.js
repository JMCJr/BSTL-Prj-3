// const itinerary = {};
// const axios = require('axios');
// const db = require('../db/index.js');




// // // this gets used in the PUT method in controllers/users.js
// itinerary.update = (req, res, next) => {
//   const id = req.params.individualItinerary;
//   // const visited = req.body.visited ? true:false;
//    db
//     .one(
//       "UPDATE itinerary SET visited = $1  WHERE id = $2 RETURNING *;",
//       [id]
//     )
//     .then(data => {
//       res.locals.updatedItinerary = data;
//       next();
//     })
//     .catch(err => {
//       console.log(
//         "Error encountered.error:",
//         err
//       );
//       next(err);
//     });
// };

// module.exports = itinerary;