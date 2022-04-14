const express = require('express');
const router = express.Router();
const {getAllPendingOrders} = require("../lib/db");

module.exports = (db) => {
  router.get("/", (req, res) => {
    getAllPendingOrders().then((menuItems) => {
      res.render("admin", {menuItems: menuItems});
    })
    .catch(e => res.send(e));
  });

  router.post("/complete", (req, res) => {
    setOrderCompleteWithOrderId().then((menuItems) => {
      res.render("admin", {menuItems: menuItems});
    })
    .catch(e => res.send(e));
  });
  return router;
}
