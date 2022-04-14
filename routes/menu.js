const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    /// change it back to db.getAllMenuItems()
    // db.getMenuItemsByCategory()
    db.getAllMenuItems()
      .then(menuItems => res.json(menuItems))
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });
  return router;
};
