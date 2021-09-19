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
|  POST  |/todo                 | individual todo           |
|  POST  |/todo/:cat/:id/edit   | edits todo                |
|  POST  |/todo/:cat/:id/delete | delete todo               |
|  GET   |/todo/:category       | list todo's from category |
|  GET   |/todo/:cat/:id        | info on todo item         |
 */

const { Router } = require("express");
const express = require("express");
const router = express.Router();
const todoQueries = require("../lib/todos-queries");

router.get("/", (req, res) => {
  const userID = req.session.userID;
  todoQueries.getToDosByUserID(userID).then((response) => {
    res.render("todo", response);
  });
});

router.post("/", (req, res) => {
  const user_id = req.session.userID;
  const due_date = req.body.due_date;
  const completed_date = req.body.completed_date;
  const name = req.body.name;
  const description = req.body.description;
  todoQueries.addToDos(user_id, due_date, completed_date, name, description)
});

// router.get("/", (req, res) => {
//   res.render('profile',
// });

module.exports = router;
