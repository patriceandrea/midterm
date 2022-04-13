const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    // TODO - RETURN JSON OBJECT OF ALL ORDERS
  });
  return router;
};
