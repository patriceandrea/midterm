// load .env data into process.env
require("dotenv").config();
const { getAllMenuItems } = require("./lib/db");

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieSession = require("cookie-session");

// const { Pool } = require("pg");
// const db = new Pool(dbHelpers.dbParams);
// db.connect();

// PG database client/connection setup
const database = require("./lib/db.js");




// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

// Set EJS as the HTML templating engine
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
  name: "session",
  keys: ['key1', 'key2']
}));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public",
    debug: true,
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));
app.use(express.static("img"));
app.use(express.json());

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/order");
const adminRoutes = require("./routes/admin");
const menuRoutes = require("./routes/menu");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(database));
app.use("/order", ordersRoutes(database));
app.use("/admin", adminRoutes(database));
app.use("/menu", menuRoutes(database));

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/dev", (req, res) => {
  res.render("dev");
});

app.get("/", (req, res) => {
  // getAllMenuItems()
  //   .then((menuItems) => {
  //     // BUG FIXING: THIS IS NOT THE ISSUE, menuItems ARE RETURNED AS EXPECTED
  //     res.render("index", { menuItems: menuItems });
  //   })
  //   .catch(error => res.send(error));
  res.render("index");
});

app.get("/menu", (req, res) => {
  res.render("menu");
});

app.get("/cart", (req, res) => {
  res.render("cart");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
