<<<<<<< HEAD
/*
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
const express = require("express");
const router = express.Router();
const userQueries = require("../lib/users-queries");

router.get("/", (req, res) => {
  // userQueries.getUsers().then((res) => console.log(res, typeof res)); for testing, please ignore
  res.render("index");
});

router.post("/:id", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const profile_url = req.body.profile_url;
  const id = userQueries.addUsers(name, email, password, profile_url);
  //add id to the cookie
  req.session.userID = id;
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
=======
const { Router } = require("express");
const express = require("express");
const router = express.Router();
const categoryQueries = require("../lib/categories-queries");

router.get("/", (req, res) => {
    // userQueries.getUsers().then((res) => console.log(res, typeof res)); for testing, please ignore
    res.render("index");
});

router.get("/:category", (req, res) => {
    const userID = req.session.id;
    categoryQueries
        .getCategoriesByCategory(req.params.category, userID)
        .then((response) => {
            res.render("category", response);
        });
});

module.exports = router;
>>>>>>> Maiduo
