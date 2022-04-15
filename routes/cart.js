const express = require('express');
const router = express.Router();
const {sendRestaurantMessage} = require('../twilio.js');

module.exports = () => {
  router.get("/", (req, res) => {
    const menuItems = req.query;
    console.log('menuItems');
    console.log(menuItems.items.split(',').map(x => parseInt(x)));
    res.render("cart", menuItems);
  });

  router.get("/?:items/", (req, res) => {
    res.render("cart");
  });

  router.post('/sendNotification', (req, res) => {
    sendRestaurantMessage();
  });

  return router;
};
