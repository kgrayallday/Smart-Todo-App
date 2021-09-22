DROP TABLE IF EXISTS entries CASCADE;

CREATE TABLE entries (
  id SERIAL PRIMARY KEY ,
  user_id INTEGER  REFERENCES users(id) ON DELETE CASCADE,
  category_id SMALLINT  DEFAULT 1,
  title VARCHAR(255) ,
  description TEXT,
  created_date timestamp DEFAULT CURRENT_TIMESTAMP(2),
  due_date DATE,
  completed_date DATE,
  statuses_id SMALLINT  REFERENCES statuses(id) ON DELETE CASCADE DEFAULT 1
);
