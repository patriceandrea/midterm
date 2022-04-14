/*
* All routes for Users are defined here
* Since this file is loaded in server.js into api/users,
*   these routes are mounted onto /users
* See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
*/

const express = require('express');
const router = express.Router();
// const bcrypt = require("bcryptjs");




module.exports = (db) => {


router.get('/login', (req, res) => {
  res.render("customer_login");
});


// const login =  function(email, password) {
//   return getUserByEmail(email)
//   .then(user => {
//     if (bcrypt.compareSync(password, user.password)) {
//       return user;
//     }
//     return null;
//   });
// }

router.post('/login', (req, res) => {
  // let email = req.body.email;
  //   let password = req.body.password;
  //   console.log( "email", email, "Password", password);
  // login(email, password)
  //   .then(user => {
  //     if (!user) {
  //       res.send({error: "error"});
  //       return;
  //     }
  //     req.session.userId = user.id;
  //     res.send(user);
  //   })
  //   .catch(e => res.send(e));
  res.redirect("/");
});





router.post('/register', (req, res) => {
  res.redirect("/");
    // const user = req.body;
    // user.password = bcrypt.hashSync(user.password, 12);

    //  addNewUser(user)
    // .then(user => {
    //   if (!user) {
    //     res.send({error: "error"});
    //     return;
    //   }

    //   req.session.userId = user.id;
    //   res.send("It worked!");
    // })
    // .catch(e => res.send(e));
    // console.log('Testing', user);
  });




  //Logout

  // router.post('/logout', (req, res) => {
  //   req.session.userID = null;
  //   res.send("You are logged out");
  // });

  return router;
};
