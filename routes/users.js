/*
* All routes for Users are defined here
* Since this file is loaded in server.js into api/users,
*   these routes are mounted onto /users
* See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
*/

const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const {addNewUser} = require("../lib/db");



module.exports = (db) => {
// Create New User
// TODO if user has same email or phone number
  router.post('/register', (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
     addNewUser(user)
    .then(user => {
      if (!user) {
        res.send({error: "error"});
        return;
      }
      req.session.userId = user.id;
      res.send("It worked!");
    })
    .catch(e => res.send(e));
    console.log('Testing', user);
  });


  return router;
};
