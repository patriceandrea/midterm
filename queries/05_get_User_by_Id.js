const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});

const id = process.argv[2];

const getUserById = (id) => {
  const query = {
    name: 'get_user_by_id',
    text: `SELECT *
            FROM users
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


getUserById(id).then((x) => console.log(x));
