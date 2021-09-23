const express = require("express");
const router = express.Router();
const fetchDatatypes = require("../lib/helper/fetchDatatypes");
const { newEntry } = require("../db/db");

module.exports = (db) => {
  router.post("/", (req, res) => {
    const title = req.body.new_task;
    const userId = req.session.userID || 1;
    fetchDatatypes(title).then((dataType) => {
      let category = 1;
      if (dataType.includes("Book")) {
        category = 2;
      } else if (
        dataType.includes("TelevisionProgram") ||
        dataType.includes("Movie")
      ) {
        category = 3;
      } else if (dataType.includes("ExpandedFood")) {
        category = 4;
      } else if (!dataType.includes("Name")) {
        category = 5;
      }
      newEntry({ userId, title, name: null, category_id: category }, db)
        .then((response) => {
          console.log(response);
          res.redirect("/");
        })
        .catch((error) => console.log(error));
    });
  });
  return router;
};
