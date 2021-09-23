const express = require("express");
const router = express.Router();
const fetchDatatypes = require("../lib/helper/fetchDatatypes");
const { newEntry } = require("../db/db");

module.exports = (db) => {
  router.post("/", (req, res) => {
    const title = req.body.new_task;
    const userId = req.session.userID || 1;
    let category = 5;
    if (title.includes("read")) {
      category = 2;
    } else if (title.includes("watch")) {
      category = 3;
    } else if (title.includes("eat")) {
      category = 4;
    } else if (!title.includes("buy")) {
      category = 1;
    }
    newEntry({ userId, title, name: null, category_id: category }, db)
      .then((response) => {
        console.log(response);
        res.redirect("/");
      })
      .catch((error) => console.log(error));
  });
  return router;
};
