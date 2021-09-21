INSERT INTO entries (
  category_id,
  user_id,
  created_date,
  due_date,
  completed_date,
  statuses_id,
  title,
  description)
  VALUES(1, 1, '2021-08-24 18:30:45.25+00', null, '2021-09-24 18:30:45.25+00', 1, 'Have Midterm Complete', 'needs to be complete my 10am Friday morning'),
  (2, 1, '2022-01-11 14:11:23.20+00', null, null , 1, 'Remember to read Don Quixote', 'Don Quixote by Miguel de Cervantes'),
  (3, 1, '2021-09-24 18:30:45.25+00', null, null, 1, 'Watch Promethius and then watch all the Alien movies', 'I think Promethius is the origin story?'),
  (4, 1, CURRENT_TIMESTAMP(2), '2023-12-29 14:11:23.20+00', null, 1, 'pick up avocados from the grocery store on the way home', 'need two green and two ripe'),
  (5, 1, '2021-09-04 14:11:23.20+00', null, '2021-09-20 14:11:23.20+00', 1, 'Save up to purchase ZSA Moonlander', 'Hack the planet!'),
  (3, 1, CURRENT_TIMESTAMP(2), null, null, 1, 'Elephant - Tame Impala', null),
  (1, 1, CURRENT_TIMESTAMP(2), null, '2021-09-20 14:11:23.20+00', 1, 'Salad Days', 'a song by Mac DeMarco'),
  (5, 1, CURRENT_TIMESTAMP(2), '2021-09-20 14:11:23.20+00', null, 1, 'The Useless Box', '$20');
