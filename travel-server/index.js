/* setting up express */
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
/* setting up port & listen */

/* setting up logger */
app.use(logger("dev"));
/* setting up body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ====================================================================
// PASSPORT STUFF
//const passport = require('passport');

// const auth = require('./services/auth.js');
// app.use(auth.passportInstance);
// app.use(auth.passportSession);

// END PASSPORT STUFF
// ====================================================================

/* setting routes */
/* ====================== INDEX ROUTE ========= */

/* noWander API route */
const nowanderRoutes = require("./controllers/noWander.js");
app.use("/api/noWander", nowanderRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
	console.log(`listening on port ${PORT}`);
});

app.get("*", function(req, res) {
	res.status(404).send({ message: "Oops! Not found." });
});
