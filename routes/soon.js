const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/soon", (req, res) => {
    res.render('soon');
  });
  return router;
};
