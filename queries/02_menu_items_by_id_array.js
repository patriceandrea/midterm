// USAGE
// Call this function with multiple cmd-line args, each an integer representing a menu_item id
// It will quietly ignore anything that is not a positive integer.
//   e.g.
//     node 02_menu_items_by_id_array.js 13 4 -1 bob 489

const { Pool } = require("pg");

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "midterm",
});

const getMenuItemsByIDArray = (ids) => {
  const query = `SELECT * FROM menu_items WHERE id IN (${ids})`;

  return pool
    .query(query)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => console.error("query error", err.stack))
    .finally(() => pool.end());
};

// Grabbing menu item IDs from command-line arguments
const menuItemIDs = process.argv
  .slice(2)
  .map((x) => parseInt(x))
  .filter((x) => Number.isInteger(x))
  .join(',');

console.log("menuItemIDs", menuItemIDs);

getMenuItemsByIDArray(menuItemIDs).then((menuItems) => console.log(menuItems));
