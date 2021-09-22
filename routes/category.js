const express = require("express");
const router = express.Router();
const {
  getActiveEntriesByCategory,
  getUnfinishedEntriesCountById,
} = require("../db/db");

module.exports = (db) => {
  router.get("/:category", (req, res) => {
    let categoryId;
    if (req.params.category === "misc") {
      categoryId = 1;
    } else if (req.params.category === "reading") {
      categoryId = 2;
    } else if (req.params.category === "multimedia") {
      categoryId = 3;
    } else if (req.params.category === "food") {
      categoryId = 4;
    } else if (req.params.category === "buying") {
      categoryId = 5;
    }

    const entries = Promise.resolve(
      getActiveEntriesByCategory(
        req.session ? req.session.userID : 1,
        categoryId,
        db
      )
    );

    Promise.all([entries]).then((values) => {
      objects = values[0];
      templateVars = {
        objects: objects,
      };
      console.log(templateVars);
      res.render("category", templateVars);
    });
  });
  router.get("/multimedia", (req, res) => {
    res.render("category");
  });

  router.get("/multimedia/edit", (req, res) => {
    res.render("edit");
  });
  return router;
};
