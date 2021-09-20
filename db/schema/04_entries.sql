DROP TABLE IF EXISTS entries CASCADE;

CREATE TABLE entries (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  category_id SMALLINT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  created_date timestamp DEFAULT CURRENT_TIMESTAMP(2),
  due_date DATE,
  completed_date DATE,
  statuses_id SMALLINT NOT NULL REFERENCES statuses(id) ON DELETE CASCADE DEFAULT 1
);
