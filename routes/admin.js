const express = require('express');
const router = express.Router();
const { sendCustomerMessage } = require("../twilio.js");


module.exports = (db) => {
  router.get("/", (req, res) => {
    db.getAllPendingOrders()
      .then((orderItems) => res.render("admin", { orderItems: orderItems }))
      .catch((e) => res.send(e));

  })




  router.post("/complete", (req, res) => {
  
    const { customer, phone, completeOrderId } = req.body
    db.setOrderCompleteWithOrderId(completeOrderId).then(() => {
      db.getAllPendingOrders()
        .then((orderItems) => {

          sendCustomerMessage(customer, phone);
          return res.render("admin", { orderItems: orderItems })


        })
    })
      .catch(e => res.send(e));
  });




  return router;
};
