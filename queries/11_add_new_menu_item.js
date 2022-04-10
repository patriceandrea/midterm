const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});

const id = process.argv[2];

const addNewMenuItem = (menuItem) => {
  const query = {
    name: 'add_new_menu_item',
    text: `INSERT INTO menu_items (name, description, price, modifiers, photo, category, type, active)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
    values: [menuItem.name, menuItem.description, menuItem.price, menuItem.modifiers, menuItem.photo, menuItem.category, menuItem,type, menuItem.active],
  };

  return pool
    .query(query)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack))
    .finally(() => pool.end());
};

addNewMenuItem(menuItem).then((x) => console.log(x));
