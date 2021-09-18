DROP TABLE IF EXISTS entries CASCADE;
CREATE TYPE status AS ENUM('active', 'delted', 'finished');

CREATE TABLE entries (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  catergory_id SMALLINT,
  title VARCHAR(255) NOT NULL,
  details TEXT,
  created_date DATE NOT NULL DEFAULT CURRENT_DATE,
  due_date DATE,
  complete_date DATE,
  current_status status
);
