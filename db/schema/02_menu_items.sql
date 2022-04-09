DROP TABLE IF EXISTS menu_items CASCADE;

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price INTEGER,
  modifiers TEXT,
  photo VARCHAR(255),
  category SMALLINT,
  status TEXT
);
