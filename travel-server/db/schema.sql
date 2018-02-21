\c noWander

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  fname VARCHAR(255) NOT NULL,
  lname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  username VARCHAR(20) UNIQUE,
  password_digest VARCHAR NOT NULL
);

DROP TABLE IF EXISTS itinerary CASCADE;

CREATE TABLE itinerary(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	city VARCHAR(255),
	date_departing VARCHAR(255),
	date_returning VARCHAR(255),
	budget INTEGER
);

DROP TABLE IF EXISTS users_itinerary;

CREATE TABLE users_itinerary(
 id SERIAL PRIMARY KEY,
 user_id INTEGER,
 itinerary_id INTEGER 
);

DROP TABLE IF EXISTS activity;

CREATE TABLE activity(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255),
  price INTEGER,
  votes INTEGER,
  itinerary_id INTEGER,
  FOREIGN KEY (itinerary_id) REFERENCES itinerary(id)
);
