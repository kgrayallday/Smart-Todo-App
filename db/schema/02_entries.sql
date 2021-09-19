DROP TABLE IF EXISTS entries CASCADE;
-- CREATE TYPE status AS ENUM('active', 'delted', 'finished');

CREATE TABLE entries (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  catergory_id SMALLINT REFERENCES categories(id) ON DELETE CASCADE, -- opting for lookup tables over enum
  title VARCHAR(255) NOT NULL,
  description TEXT,
  created_date DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(2),
  due_date DATE,
  completed_date DATE,
  statuses SMALLINT NOT NULL
);
