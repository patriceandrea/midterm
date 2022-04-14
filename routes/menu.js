const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    db.getAllMenuItems()
      .then((menuItems) => res.json(menuItems))
      .catch((e) => res.send(e));
  });
  return router;
};
