const getMenuItem = (id) => {

  const { Pool } = require('pg');

  const pool = new Pool({
    user: 'labber',
    password: 'labber',
    host: 'localhost',
    database: 'midterm'
  });

  console.log();

  const query = {
    name: 'menu-item-by-id',
    text: `SELECT *
            FROM menu_items
            WHERE id = $1;`,
    values: [id],
  };

  return pool
    .query(query)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack))
    .finally(() => pool.end());
};

const order = [1, 17, 4, 6, 13];

order.forEach(x => {
  getMenuItem(x)
    .then((res) => {
      console.log(res[0]);
    });
});
