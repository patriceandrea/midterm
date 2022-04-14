const express = require('express');
const router = express.Router();

const sendCustomerMessage = (name, phone) => {
  console.log("sending message...");
  client.messages
    .create({
      body: `Hi ${name},Your order is ready! Thank you for ordering with us.`,
      from: process.env.TWILIO_NUMBER,
      to: phone
    })
    .then(message => console.log("message id: " + message.sid))
    .catch(err => {
      console.log(err);
    });
};

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
