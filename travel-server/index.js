require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const tokenService = require("./services/TokenService");
const userRouter = require("./controllers/users");
const authService = require("./services/AuthService");

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(tokenService.receiveToken);

app.use(bodyParser.urlencoded({ extended: false }));

const nowanderRoutes = require("./controllers/noWander.js");
app.use("/api/noWander", nowanderRoutes);

//TAKEN FROM AUTH RESTRICT REACT LESSON
app.use("/users", userRouter);

app.get("/isLoggedIn", authService.isLoggedIn, (req, res) => {
	res.json({ isLoggedIn: res.locals.isLoggedIn });
});
//
const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
	console.log(`listening on port ${PORT}`);
});

app.get("*", function(req, res) {
	res.status(404).send({ message: "Oops22! Not found." });
});
