const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});

const orderId = process.argv[2];


const setOrderCompleteWithOrderId = (orderId) => {
  const query = {
    name: 'set_complete_with_order_id',
    text: `UPDATE orders
    SET ready_at = NOW()
    WHERE id = $1; `
  ,values:[orderId],
  };

  return pool
    .query(query)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack))
    .finally(() => pool.end());
};

setOrderCompleteWithOrderId(orderId).then((x) => console.log(x));
