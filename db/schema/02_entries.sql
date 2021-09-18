DROP TABLE IF EXISTS entries CASCADE;
-- CREATE TYPE status AS ENUM('active', 'delted', 'finished');

CREATE TABLE entries (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  catergory_id SMALLINT, -- opting for lookup tables over enum
  title VARCHAR(255) NOT NULL,
  description TEXT,
  created_date DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(2),
  due_date DATE,
  complete_date DATE,
  current_status SMALLINT NOT NULL DEFAULT 0
);
