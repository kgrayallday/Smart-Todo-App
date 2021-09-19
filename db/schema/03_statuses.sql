DROP TABLE IF EXISTS statuses CASCADE;

CREATE TABLE statuses (
  id SERIAL PRIMARY KEY NOT NULL,
  status VARCHAR(255) NOT NULL
);

INSERT INTO categories (name)
VALUES('active'), -- status code 1
      ('completed'), -- status code 2
      ('deleted'); -- status code 3
      -- could add priority
