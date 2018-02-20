//from classroom demonstration- there are a few modifications made
const Users = require("../models/users");
const router = require("express").Router();
const passport = require("passport");

// const controller = require('./controller');
const auth = require("../services/auth");

// ----------------------------------------
// users index

// router.get("/", (req, res, next) => {
// 	res.redirect("/sounds/library");
// });

// router.post(
// 	"/",
			// we want the behavior of the site to vary depending on whether or
			// not the user is already logged in. If they are logged in, we want
			// to send them to /users/profile. If they are not, we want to send
			// them to users/new.
	// passport.authenticate(
			// The following string indicates the particular strategy instance
			// we'll want to use to handle signup. We defined behavior for
			// 'local-signup' back in index.js.
// 		"local-signup",
// 		{
// 			failureRedirect: "/users/register",
// 			successRedirect: "/sounds/library"
// 		}
// 	)
// );

// ----------------------------------------

// ----------------------------------------------------
// Define GET request for 'users/:email', which is ONE 
// usersModelObject.findByEmail
// This is ______ job
router.get('/users/:email', users.findByEmail, (req, res, next) =>{
  res.json(res.locals.findByEmailData);
});








// ----------------------------------------------------



// register new user

router.get("/signup", (req, res) => {
	res.render("users/signup");
});

// ----------------------------------------
// user logout

router.get("/logout", (req, res) => {
	// passport put this method on req for us
	req.logout();
	// redirect back to index page
	res.redirect("/users/login");
});

// ----------------------------------------
// user login

router.get("/login", (req, res) => {
	res.render("users/login");
});

// passport.authenticate will _build_ middleware for us
// based on the 'local-login' strategy we registered with
// passport in auth.js

router.post(
	"/login",
	passport.authenticate("local-login", {
		failureRedirect: "/users/login",
		successRedirect: "/dashboard/:email"
	})
);

// ----------------------------------------
// user profile

router.get(
	"/profile",
	// Middleware (that we wrote) ensuring that if the user is not
	// authenticated, he or she will be redirected to the login screen.
	auth.restrict,
	User.findByEmailMiddleware,
	(req, res) => {
		console.log("in handler for users/profile");
		console.log("req.user:");
		console.log(req.user);
		res.render("library", { user: res.locals.userData });
	}
);

module.exports = router;
