// load .env data into process.env
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieSession = require("cookie-session");

const database = require("./lib/db.js");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

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
    destination: __dirname + "/public/styles",
    debug: true,
    isSass: false, // false => scss, true => sass
    outputStyle: 'expanded'
  })
);

app.use(express.static("public"));
app.use(express.static("img"));
app.use(express.json());

const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/order");
const adminRoutes = require("./routes/admin");
const menuRoutes = require("./routes/menu");

app.use("/api/users", usersRoutes(database));
app.use("/order", ordersRoutes(database));
app.use("/admin", adminRoutes(database));
app.use("/menu", menuRoutes(database));

// Note: mount other resources here, using the same pattern above

// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

//TESTING ROUTE
app.get("/dev", (req, res) => {
  res.render("dev");
});

// Home page
app.get("/", (req, res) => {
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
