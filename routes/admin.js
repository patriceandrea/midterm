const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => res.render("admin"));

  router.get("/orders", (req, res) => {
    db.getAllPendingOrders()
      .then((orders) => res.json(orders))
      .catch((e) => res.send(e));
  });

  // router.post("/complete", (req, res) => {
  //   setOrderCompleteWithOrderId().then((menuItems) => {
  //     res.render("admin", {menuItems: menuItems});
  //   })
  //     .catch(e => res.send(e));
  // });

  return router;
};
