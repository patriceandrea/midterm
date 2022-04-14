const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.getAllPendingOrders()
    .then((orderItems) =>  res.render("admin", {orderItems: orderItems}))
    .catch((e) => res.send(e));

  })

 


  router.post("/complete", (req, res) => {
    console.log("Request",req.body);

    db.setOrderCompleteWithOrderId(req.body.completeOrderId).then(() => {
      db.getAllPendingOrders()
    .then((orderItems) =>  res.render("admin", {orderItems: orderItems}))
      console.log("Complete")
    })
      .catch(e => res.send(e));
  });




  return router;
};
