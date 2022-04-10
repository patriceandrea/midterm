const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});

const orderId = process.argv[2];

const cancelOrderByOrderId = (orderId) => {
  const query = {
    name: 'cancel_Order_By_Order_Id',
    text: `Delete FROM orders
            WHERE id = $1; `,
    values: [orderId],
  };

  return pool
    .query(query)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack))
    .finally(() => pool.end());
};

cancelOrderByOrderId(orderId).then((x) => console.log(x));
