const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});

const type = process.argv[2];

const getMenuItemsByType = (type) => {
  const query = {
    text: `SELECT * FROM menu_items AS items
            WHERE items.type ILIKE 'Meat';`,
    values: [type],
  };

  return pool
    .query(query)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack))
    .finally(() => pool.end());
};

getMenuItemsByType(type).then((x) => console.log(x));
