#READ ME:

##What’s this app all about?

noWander is a trip-planning app that allows a traveler to create and maintain a list of activities for an upcoming trip or vacation.

Users navigate to our site and are prompted to log in, or navigate to a signup page and register with an email address.

After a successful login or registration, the user is taken to their profile page, where a list of their itineraries will appear.

They can create new itineraries, and also click on existing itineraries, taking them to a itinerary page that shows their trip information, and a list of activities they can add, edit and delete from.

##Our general group approach:

From day 1, the group was pretty modular. With meticulous planning and organizing, each member knew exactly what their next task was. A google docs spreadsheet was created and tracked individual tasks in-progress and completed.

##Explanations of technologies used:

HTML,
CSS,
JS,
REACT

**Axios:** Apromise-based HTTP client that works both in the browser and in a node.js environment. It basically provides a single API for dealing with XMLHttpRequest s and node's http interface. Besides that, it wraps the requests using a polyfill for ES6 new promise syntax.

**Bcrypt:** A password hashing function. The bcrypt function is the default password hash algorithm for OpenBSD.

**Body-parser:** In order to get access to the post data we have to use body-parser. Basically what the body-parser is which allows express to read the body and then parse that into a Json object that we can understand.

**Cookie-parser:** The cookie parser parses cookies and puts the cookie information on req object in the middleware. It will also decrypt signed cookies provided you know the secret.

**Cors:** Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources (e.g. fonts) on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.

**Dotenv:** A zero-dependency module that loads environment variables from a .env file into process.env.

**Express:** A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

**Express-session:** Express-session stores only a session identifier on the client within a cookie and stores the session data on the server, typically in a database.

**Faker:** Randomly generates fake names.

**Jsonwebtoken:** An open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

**Jwt-simple:** An encoded string representation of a simple JavaScript object which describes the token along with the hashing algorithm used.

**Morgan:** Used for logging request details.

**Node:** An open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side.

**Nodemon:** A utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using npm. Just use nodemon instead of node to run your code, and now your process will automatically restart when your code changes.

**Passport:** Authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

**PG-promise:** A library built on top of node-postgres. The PG-promise library adds the following, automatic connections, automatic transactions, powerful query-formatting engine, declarative approach to handling query results, global events reporting for central handling and extensive support for external SQL files.

##User stories

###User story #1: Abby Roe, the soccer mom

I am Abby Roe, I am a soccer mom.

Because I am so diligent, I want a comprehensive list of activities for our upcoming trip to Brazil. But everyone else in the family is busy or unreliable - so it’s up to me.

But thankfully, this app noWander is just what I need to create an itinerary of potential things to do while we’re away.

And since I can also track the associated costs, it’s just what I need to create a thoughtfully-planned trip while staying under the budget.

###User Story #2: John Doe, he travels a lot

I am John Doe, I am a businessman and travel a lot.

I want to create an itinerary with a list of activities that I can do when I am at various places.

I can plan business events and budget them as well.

I can also plan on leisure activities that I can do on my free time. I don’t have to waste my time trying to figure out what to do when I'm at the destination.

##Important links:

###ERD/wireframes:
<https://imgur.com/a/qQAUU>

###Project repo:
<https://github.com/JMCJr/BSTL-Prj-3>

###Deployed app:
<https://no-wander.herokuapp.com/login>

##Challenges

###Wins:
Finally getting AUTH to play nice with React

No major merge conflicts

###Losses:
CSS, things were different in React, possibility of conflicting styles.

Hard to debug code you as an individual didn’t write.

Getting multiple users to login to the same itinerary.

Some minor hiccups implementing AUTH.

Coordinating GIT pushes, trying to avoid merge conflicts.

Hard to debug code you as an individual didn’t write.

##MVP

###Landing page:

Auth on sign up/login

###Profile page:

One user per itinerary (an itinerary is a list of activities to do)

EDIT: a user can edit their profile info (name, email)

On profile page CREATE ITINERARY, and RENDER list of user’s itineraries

Create itinerary via form. Only add (City, String of Dates, Name of itinerary)
Itinerary page
On itinerary page RENDER city, dates, name of itinerary
ADD an activity via FORM (Name of activity, Description)
Able to DELETE activity
Render list of activities

##Original project Timeline

###Friday
Set up back end schema and seed
Boilerplate
Brand Identity
###Saturday
Set up GET route/Models
Landing Page/Profile page
React Rendering
Landing Page/ Profile page
Sign up/Login
POST / PUT
###Sunday
Set Up GET/POST
Create Itinerary and Activity
React Rendering
Create Itinerary and Activity
Styling
###Monday
Styling
Set Up PUT and DELETE
All rendered pages
###Tuesday
MVP goals should be accomplished by this day
Styling
Cleaning up code / refactoring
Testing
Bugs
###Wednesday
Reach Goals
Implement External APIs
New table features
Styling
###Thursday
Finishing touches
Presentation Preparation
