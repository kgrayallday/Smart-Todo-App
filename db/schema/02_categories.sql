DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

INSERT INTO categories (name)
VALUES('uncategorized');
VALUES('Books');
VALUES('Films');
VALUES('Foods');
VALUES('Products');
