const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});

const id = process.argv[2];

const getPendingOrdersByUserId = (id) => {
  const query = {
    name: 'get_all_pending_orders',
    text: `SELECT *
            FROM orders
            JOIN users ON user_id = users.id
            WHERE user_id = $1
            AND orders.ready_at IS NULL;`,
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

getPendingOrdersByUserId(id).then((x) => console.log(x));
