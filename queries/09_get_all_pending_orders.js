const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});



const getPendingOrders = () => {
  const query = {
    name: 'get_all_pending_orders',
    text: `SELECT *
            FROM orders
            WHERE created_at is NOT NULL
            AND ready_at IS NULL; `,
  };

  return pool
    .query(query)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack))
    .finally(() => pool.end());
};

getPendingOrders().then((x) => console.log(x));
