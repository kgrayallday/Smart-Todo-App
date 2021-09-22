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

const express = require("express");
const router = express.Router();
const fetchDatatypes = require("../lib/helper/fetchDatatypes");
const  { newEntry } = require("../db/db");


module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log("router post\n");
    const title = req.body.new_task;
    const userId = 1 || req.session.userID;
    fetchDatatypes(title).then((dataType) => {
      console.log({ dataType });
      let category = 1;
      if (dataType.includes("Books")) {
        category = 2;
      } else if (
        dataType.includes("TelevisionProgram") ||
        dataType.includes("Movies")
      ) {
        category = 3;
      } else if (dataType.includes("ExpandedFood")) {
        category = 4;
      } else if (!dataType.includes("Name")) {
        category = 5;
      }
      console.log("..............Reached Todo POST");
      newEntry({ userId, title, name: null, category_id: category }, db)
        .then((response) => {
          console.log("Response: ", { userId, title, name: null, something: null, category_id: category });
          console.log(response);
        })
        .catch((error) => console.log(error));
    });
  });
  return router;
};
/*
CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

INSERT INTO categories (name)
VALUES('uncategorized'),
      ('Books'),
      ('Media'),
      ('Foods'),
      ('Products');

*/

// const todoQueries = require("../lib/todos-queries");

// router.get("/", (req, res) => {
//     const userID = req.session.userID;
//     todoQueries.getToDosByUserID(userID).then((response) => {
//         res.render("todo", response);
//     });
// });

// router.post("/", (req, res) => {
//     const user_id = req.session.userID;
//     const due_date = req.body.due_date;
//     const completed_date = req.body.completed_date;
//     const name = req.body.name;
//     const description = req.body.description;
//     todoQueries.addToDos(user_id, due_date, completed_date, name, description)
// });

// router.get("/", (req, res) => {
//   res.render('profile',
// });

// module.exports = router;
