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
    VALUES($1, $2, $3, $4, $5, $6) RETURNING *;`,values:[user.name, user.email, user.password, user.phone, user.admin, user.created_at],
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

// addNewUser(
// {
//   name : 'Julia',
//   email: 'abc',
//   password: 'abc',
//   phone: 'abc',
//   admin: 'f',
//   created_at: '2022-04-05 02:27:17'
// }

// ).then((x) => console.log(x));
