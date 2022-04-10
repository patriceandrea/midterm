const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});

const id = process.argv[2];

const getAllIncomingOrders = () => {
  const query = {
    name: 'get_all_incoming_orders',
    text: `SELECT *
            FROM orders
            WHERE ready_at IS NULL `,
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

getAllIncomingOrders().then((x) => console.log(x));
