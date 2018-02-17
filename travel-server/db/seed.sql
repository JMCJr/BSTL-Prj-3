INSERT INTO itinerary (name, city, date_departing, date_returning, budget) VALUES 
  ('Girl trip', 'Paris', '05/12/2018', '05/27/2018', 5555),
  ('Brocode', 'Miami', '06/17/2018', '07/27/2018', 3000),
  ('Business trip', 'Chicago', '03/12/2018', '03/27/2018', 10202),
  ('Fun run', 'Portland', '08/12/2018', '08/27/2018', 133);



INSERT INTO activity (name, description, price, votes, itinerary_id) VALUES
('Parasailing', 'on the watr', 200, 2, 1),
('skiiing', 'snow', 300, 2, 4),
('The opera', 'downtown', 400, 1, 3),
('party', 'prty all nite', 500, 0, 2),
('drinking', 'wasteddd', 78, 3, 1);

INSERT INTO users (fname, lname, email, username) VALUES
('Namie', 'McSmith', 'mcsmith@me.com', 'mcsmithgrrrl'),
('Gladies', 'Pipps', 'pipsing@me.com', 'pipmeout'),
('Jeunet', 'Cobblepot', 'penguinlvr@me.com', 'arkarkark'),
('Jimmi', 'Smittz', 'thesbian@me.com', 'thesbian'),
('Ramona', 'Danzig', 'mother@me.com', 'mother'),
('Wikki', 'Wicardo', 'aylucy@me.com', 'lucyhater');