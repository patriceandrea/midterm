const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});

const email = process.argv[2];

const getUserByEmail = (email) => {
  const query = {
    name: 'get_user_by_email',
    text: `SELECT *
            FROM users
            WHERE email = $1;`,
    values: [email],
  };

  return pool
    .query(query)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack))
    .finally(() => pool.end());
};

getUserByEmail(email).then((x) => console.log(x));
