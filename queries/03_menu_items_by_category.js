const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});

const categoryID = process.argv[2];

const getMenuItemsByCategory = (categoryID) => {
  const query = {
    name: '',
    text: `SELECT items.*, c.name AS category_name
             FROM menu_items AS items
             JOIN menu_categories AS c ON c.id = items.category
            WHERE c.id = $1;`,
    values: [categoryID],
  };

  return pool
    .query(query)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack))
    .finally(() => pool.end());
};

getMenuItemsByCategory(categoryID).then((x) => console.log(x));
