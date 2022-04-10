const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});


const addNewUser = (user) => {
  const query = {
    name: 'add_new_user',
    text: `INSERT INTO users (name, email, password, phone, admin, created_at)
    VALUES($1, $2, $3, $4, $5, $6) RETURNING *;`,values:[user.name, user.password, user.phone, user.admin, user.created_at],
  };

  return pool
    .query(query)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack))
    .finally(() => pool.end());
};

addNewUser(user).then((x) => console.log(x));
