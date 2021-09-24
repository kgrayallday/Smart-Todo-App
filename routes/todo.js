const express = require("express");
const router = express.Router();
const fetchDatatypes = require("../lib/helper/fetchDatatypes");
const { newEntry } = require("../db/db");

module.exports = (db) => {
  router.post("/", (req, res) => {
    const title = req.body.new_task;
    const userId = req.session.userID || 1;
    fetchDatatypes(title).then(category =>
      newEntry({ userId, title, name: null, category_id: category }, db)
        .then((response) => {
          console.log(response);
          res.redirect("/");
        })
        .catch((error) => console.log(error))
    );
  });
  return router;
};
