const express = require('express');
const router = express.Router();

require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken= process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio'); // npm i twilio
const client = new twilio(accountSid, authToken);

const sendCustomerMessage = (name, phone) => {
  console.log("sending message...", "name", name, "phone", phone);
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
    const  {customer, phone, completeOrderId} = req.body
    db.setOrderCompleteWithOrderId(completeOrderId).then(() => {
      db.getAllPendingOrders()
    .then((orderItems) => {

      sendCustomerMessage(customer, phone);
      return res.render("admin", {orderItems: orderItems})


    })
    })
      .catch(e => res.send(e));
  });




  return router;
};
