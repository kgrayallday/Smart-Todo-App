/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 *
 *
| Method | Route                | Function                  |
|--------|:---------------------|:--------------------------|
|  GET   |/                     | Home/Root                 |
|  GET   |/login                | login page                |
|  POST  |/login/:id            | post log in credentials   |
|  POST  |/logout               | logs user out             |
|  GET   |/profile              | view user profile         |
|  POST  |/profile/:id/edit     | view user profile         |
|  GET   |/todo                 | main page of all cats     |
|  POST  |/todo/:id             | individual todo           |
|  POST  |/todo/:cat/:id/edit   | edits todo                |
|  POST  |/todo/:cat/:id/delete | delete todo               |
|  GET   |/todo/:category       | list todo's from category |
|  GET   |/todo/:cat/:id        | info on todo item         |
 */

const { Router } = require("express");
const express = require("express");
const router = express.Router();
const userQueries = require("../lib/users-queries");

router.get("/", (req, res) => {
  userQueries.getUsers().then((users) => {
    res.send(users);
  });
});

router.post("/:id", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const profile_url = req.body.profile_url;
  const id = userQueries.addUser(name, email, password, profile_url);
  //add id as the cookie
  req.session.id = id;
});

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

module.exports = router;
