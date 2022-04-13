const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    db.getAllMenuItems()
      .then((menuItems) => {
        // or maybe res.json() ?
        res.send(menuItems);
      })
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });
  return router;
};
