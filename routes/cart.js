
const express = require('express');
const router = express.Router();
const {sendRestaurantMessage} = require('../twilio.js');


module.exports = () => {


    router.post('/sendNotification', (req, res) => {
      sendRestaurantMessage();
    });

    return router;
  };
