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

const { Router } = require("express");
const express = require("express");
const router = express.Router();
const userQueries = require("../lib/users-queries");

router.get("/", (req, res) => {
  const ID = req.session.id;
  userQueries.getUsersByID(ID).then((response) => {
    res.render("profile", response);
  });
});

router.post("/:id/edit", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const profile_url = req.body.profile_url;
  const id = req.params.id;
  userQueries
    .updateUsers(id, name, email, password, profile_url)
    .then((response) => {
      res.render("profile", response);
    });
});

// router.get("/", (req, res) => {
//   res.render('profile',
// });

module.exports = router;
