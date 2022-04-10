const { Pool } = require("pg");

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "midterm",
});

// Grabbing menu item ID from command-line arguments
let menuItemID = parseInt(process.argv[2]);

// If no command-line arguments are found, or if the first command line argument is not an integer, then log a warning to the console and set menuItemID to a default of 1
if (!menuItemID || !Number.isInteger(menuItemID)) {
  console.log(
    "   -------------------------------------------------------------------------------------------"
  );
  console.log(
    "   |  Expected first cmd-line arg to be an integer > 0 representing the ID of a menu item.   |"
  );
  console.log(
    "   |  No command-line arg was found, or the cmd-line arg provided is not an integer.         |"
  );
  console.log(
    "   |  Querying database with default menu_item ID 1.                                         |"
  );
  console.log(
    "   -------------------------------------------------------------------------------------------"
  );
}

if (process.argv.length > 3) {
  console.log("   ---------------------------------------------------------");
  console.log("   |  Ignored all command-line arguments after the first.  |");
  console.log("   ---------------------------------------------------------");
}

const getMenuItemByID = (id) => {
  const query = {
    text: `SELECT * FROM menu_items
            WHERE id = $1;`,
    values: [id],
  };

  return pool
    .query(query)
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => console.error("query error", err.stack))
    .finally(() => pool.end());
};

getMenuItemByID(menuItemID || 1).then((menuItem) => console.log(menuItem));

// THE CODE BELOW IS THE JAVASCRIPT WAY OF GETTING MULTIPLE MENU ITEMS FROM THE DATABASE BY CHAINING TOGETHER SEVERAL REQUESTS FOR A SINGLE MENU ITEM

// UPON REFLECTION, THIS IS A TIME-INTENSIVE WAY OF DOING IT WITH JAVASCRIPT. BEST PRACTICE WOULD BE TO WRITE A SMARTER QUERY WHICH CAN GRAB THE CORRECT MENU ITEMS FROM THE DATABASE IF GIVEN AN ARRAY OF MENU ITEM IDs.

// This is an iterable of promises for each menu item in the order
//
//    order.map(x => getMenuItem(x))

// This returns a single Promise that resolves to an array of the results of the input promises. Only resolves when all input promises have resolved.
//
//    Promise.all(order.map(x => getMenuItem(x)))

// const order = [1, 17, 4, 6, 13];
// const orderItems = [];

// const orderItemsPromise = Promise.all(order.map(x => getMenuItem(x)));

// orderItemsPromise
//   .then((menuItems) => {
//     menuItems.forEach(x => orderItems.push(x));

//     let subtotal = 0;

//     orderItems.forEach((x) => {
//       console.log('Name:', x.name);
//       console.log('Price:', `$${(x.price / 100).toFixed(2)}`);
//       subtotal += x.price;
//     });

//     console.log('Subtotal:', `$${(subtotal / 100).toFixed(2)}`);
//   });
