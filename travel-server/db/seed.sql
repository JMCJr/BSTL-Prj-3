INSERT INTO itinerary (name, city, date_departing, date_returning, budget, user_id) VALUES 
  ('Girl trip', 'Paris', '05/12/2018', '05/27/2018', 5555, 1),
  ('Brocode', 'Miami', '06/17/2018', '07/27/2018', 3000, 2),
  ('Business trip', 'Chicago', '03/12/2018', '03/27/2018', 10202, 3),
  ('Fun run', 'Portland', '08/12/2018', '08/27/2018', 133, 1),
  ('Starbucks interview', 'New York', '02/19/2018', '02/20/2018', 10, 1),
  ('Get fit', 'Hoboken', '01/10/2018', '01/13/2018', 150, 3),
  ('Run very fast', 'Seattle', '07/24/2018', '10/02/2018', 2 ,1);

INSERT INTO activity (name, description, price, votes, itinerary_id) VALUES
('Parasailing', 'on the watr', 200, 2, 1),
('skiiing', 'snow', 300, 2, 4),
('The opera', 'downtown', 400, 1, 3),
('party', 'prty all nite', 500, 0, 2),
('drinking', 'wasteddd', 78, 3, 1);


