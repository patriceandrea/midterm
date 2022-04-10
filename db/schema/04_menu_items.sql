DROP TABLE IF EXISTS menu_items CASCADE;

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price INTEGER DEFAULT 0,
  modifiers TEXT,
  photo VARCHAR(255),
  category SMALLINT REFERENCES menu_categories(id) ON DELETE CASCADE,
  type TEXT,
  active BOOLEAN NOT NULL
);
