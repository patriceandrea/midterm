const express = require('express');
const router = express.Router();
// const bcrypt = require("bcryptjs");


module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("admin");
  });


  router.get("/login", (req, res) => {
    res.render("admin_login");
  });



  // const login =  function(email, password) {
  //   return getUserByEmail(email)
  //   .then(user => {
  //     if(!user.admin) {
  //       return null;
  //     }
  //     if (bcrypt.compareSync(password, user.password)) {
  //       return user;
  //     }
  //     return null;
  //   });
  // }

  router.post('/login', (req, res) => {
    // let email = req.body.email;
    // let password = req.body.password;
    // login(email, password)
    //   .then(user => {
    //     if (!user) {
    //       res.send({error: "error"});
    //       return;
    //     }
    //     req.session.userId = user.id;
        res.redirect("/admin");
      // })
      // .catch(e => res.send(e));
  });


  //   //Logout

  //   router.post('/logout', (req, res) => {
  //     req.session.userID = null;
  //     res.send("You are logged out");
  //   });

    return router;
  };

