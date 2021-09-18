/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { Router } = require('express');
const express = require('express');
const router  = express.Router();
const userQueries = require('../lib/users-queries');

Router.get('/', (req, res) => {
  userQueries.getUsers()
  .then((users) => {
    res.render('../views/index.js', users);
  });
})



// users = (db) => {
//   console.log("reached users.js", db);
//   router.get("/", (req, res) => {
//     db.query(`SELECT * FROM users;`)
//       .then(data => {
//         const users = data.rows;
//         res.json({ users });
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//   });
//   return router;
// };

module.exports = users;
