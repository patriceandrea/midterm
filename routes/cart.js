
const express = require('express');
const router = express.Router();
const {sendRestaurantMessage} = require('../twilio.js');

module.exports = () => {
  router.get("/", (req, res) => {
    res.render("cart");
  });

  router.post('/sendNotification', (req, res) => {
    sendRestaurantMessage();
  });

  return router;
};
