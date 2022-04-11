const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});


const id = process.argv[2];

const getCompletedOrdersByUserId = (id) => {
  const query = {
    name: 'get_all_completed_orders',
    text: `SELECT *
            FROM orders
            JOIN users ON user_id = users.id
            WHERE user_id = $1
            AND ready_at IS NOT NULL; `,
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

getCompletedOrdersByUserId(id).then((x) => console.log(x));
