// This whole file returns an object whose key:value pairs are all of our database helpers

const { Pool } = require('pg');

const pool = new Pool({
  // IF THIS WORKS, THEN COME BACK AND REPLACE WITH PROCESS.ENV VARIABLES
  host: 'localhost',
  database: 'midterm',
  user: 'labber',
  password: 'labber'
});

const getAllMenuItems = () => {
  const query = {
    name: 'get_all_menu_Items',
    text: `SELECT *
           FROM menu_items;`,
  };
  return pool
    .query(query)
    .then(res => res.rows)
    .catch(err => console.error('query error', err.stack));
};
exports.getAllMenuItems = getAllMenuItems;


const getAllPendingOrders = () => {
  const query = {
    name: 'get_all_pending_orders',
    text: `SELECT orders.* , users.name, order_items.item as items
                FROM orders
                JOIN users ON users.id = user_id
                JOIN order_items ON order_id = orders.id
                WHERE ready_at IS NULL; `,
  };

  return pool
    .query(query)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack))

};
exports.getAllPendingOrders = getAllPendingOrders;

// const { Pool } = require('pg');

// const pool = new Pool({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   host: process.env.DB_HOST,
//   // process.env.DB_NAME gives an error
//   database: 'midterm'
// });

// //User Methods

// const getUserByEmail = (email) => {
//   const query = {
//     name: 'get_user_by_email',
//     text: `SELECT *
//             FROM users
//             WHERE email = $1;`,
//     values: [email],
//   };

//   return pool
//     .query(query)
//     .then(res => {
//       return res.rows[0];
//     })
//     .catch(err => console.error('query error', err.stack))
// };

// const getUserById = (id) => {
//   const query = {
//     name: 'get_user_by_id',
//     text: `SELECT *
//             FROM users
//             WHERE id = $1;`,
//     values: [id],
//   };

//   return pool
//     .query(query)
//     .then(res => {
//       return res.rows;
//     })
//     .catch(err => console.error('query error', err.stack))
//     .finally(() => pool.end());
// };

// const addNewUser = (user) => {
//   const query = {
//     name: 'add_new_user',
//     text: `INSERT INTO users (name, email, password, phone, admin, created_at)
//     VALUES($1, $2, $3, $4, $5, $6) RETURNING *;`,
//     values: [user.name, user.email, user.password, user.phone, user.admin, user.created_at],
//   };

//   return pool
//     .query(query)
//     .then(res => {
//       return res.rows;
//     })
//     .catch(err => console.error('query error', err.stack))

// };

// // Menu Methods

// const getAllMenuItems = () => {
//   const query = {
//     name: 'get_all_menu_Items',
//     text: `SELECT *
//            FROM menu_items;`,
//   };
//   return pool
//     .query(query)
//     .then(res => {
//       return res.rows;
//     })
//     .catch(err => console.error('query error', err.stack))
// };


// const getMenuItemByID = (id) => {
//   const query = {
//     text: `SELECT * FROM menu_items
//             WHERE id = $1;`,
//     values: [id],
//   };

//   return pool
//     .query(query)
//     .then((res) => {
//       return res.rows[0];
//     })
//     .catch((err) => console.error("query error", err.stack))
//     .finally(() => pool.end());
// };

// const getMenuItemsByIDArray = (ids) => {
//   const query = `SELECT * FROM menu_items WHERE id IN (${ids})`;

//   return pool
//     .query(query)
//     .then((res) => {
//       return res.rows;
//     })
//     .catch((err) => console.error("query error", err.stack))
// };

// const getMenuItemsByCategory = (categoryID) => {
//   const query = {
//     text: `SELECT items.*, c.name AS category_name
//              FROM menu_items AS items
//              JOIN menu_categories AS c ON c.id = items.category
//             WHERE c.id = $1;`,
//     values: [categoryID],
//   };

//   return pool
//     .query(query)
//     .then(res => {
//       return res.rows;
//     })
//     .catch(err => console.error('query error', err.stack))
// };

// const getMenuItemsByType = (type) => {
//   const query = {
//     text: `SELECT * FROM menu_items AS items
//             WHERE items.type ILIKE $1;`,
//     values: [type],
//   };

//   return pool
//     .query(query)
//     .then(res => {
//       return res.rows;
//     })
//     .catch(err => console.error('query error', err.stack))
//     .finally(() => pool.end());
// };


// const addNewMenuItem = (menuItem) => {
//   const query = {
//     name: 'add_new_menu_item',
//     text: `INSERT INTO menu_items (name, description, price, modifiers, photo, category, type, active)
//     VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
//     values: [menuItem.name, menuItem.description, menuItem.price, menuItem.modifiers, menuItem.photo, menuItem.category, menuItem.type, menuItem.active],
//   };

//   return pool
//     .query(query)
//     .then(res => {
//       return res.rows;
//     })
//     .catch(err => console.error('query error', err.stack))
// };



// //Admin Methods

// const getAllIncomingOrders = () => {
//   const query = {
//     name: 'get_all_incoming_orders',
//     text: `SELECT *
//             FROM orders
//             WHERE ready_at IS NULL ;`,
//   };

//   return pool
//     .query(query)
//     .then(res => {
//       return res.rows;
//     })
//     .catch(err => console.error('query error', err.stack))

// };



// const getCompletedOrdersByUserId = (id) => {
//   const query = {
//     name: 'get_all_completed_orders',
//     text: `SELECT *
//             FROM orders
//             JOIN users ON user_id = users.id
//             WHERE user_id = $1
//             AND ready_at IS NOT NULL; `,
//     values: [id],
//   };

//   return pool
//     .query(query)
//     .then(res => {
//       return res.rows;
//     })
//     .catch(err => console.error('query error', err.stack))
//     .finally(() => pool.end());
// };

// const getPendingOrdersByUserId = (id) => {
//   const query = {
//     name: 'get_all_pending_orders',
//     text: `SELECT *
//             FROM orders
//             JOIN users ON user_id = users.id
//             WHERE user_id = $1
//             AND orders.ready_at IS NULL;`,
//     values: [id],
//   };

//   return pool
//     .query(query)
//     .then(res => {
//       return res.rows;
//     })
//     .catch(err => console.error('query error', err.stack))
//     .finally(() => pool.end());
// };

// const cancelOrderByOrderId = (orderId) => {
//   const query = {
//     name: 'cancel_Order_By_Order_Id',
//     text: `Delete FROM orders
//             WHERE id = $1; `,
//     values: [orderId],
//   };

//   return pool
//     .query(query)
//     .then(res => {
//       return res.rows;
//     })
//     .catch(err => console.error('query error', err.stack))

// };

// const setOrderCompleteWithOrderId = (orderId) => {
//   const query = {
//     name: 'set_complete_with_order_id',
//     text: `UPDATE orders
//     SET ready_at = NOW()
//     WHERE id = $1; `
//     , values: [orderId],
//   };

//   return pool
//     .query(query)
//     .then(res => {
//       return res.rows;
//     })
//     .catch(err => console.error('query error', err.stack))
//     .finally(() => pool.end());
// };

// module.exports = {
//   dbParams,
//   getUserByEmail,
//   getUserById,
//   addNewUser,
//   getMenuItemByID,
//   getAllMenuItems,
//   getMenuItemsByType,
//   getMenuItemsByIDArray,
//   getMenuItemsByCategory,
//   addNewMenuItem,
//   getAllIncomingOrders,
//   getCompletedOrdersByUserId,
//   getAllPendingOrders,
//   getPendingOrdersByUserId,
//   cancelOrderByOrderId,
//   setOrderCompleteWithOrderId
// }
