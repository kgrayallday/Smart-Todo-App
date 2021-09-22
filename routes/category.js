const express = require("express");
const router = express.Router();
const {
  getActiveEntriesByCategory,
  updateStatus,
  updateTitle,
  getCategoryIdByEntryId,
  getTitleByEntryId,
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

  router.post("/delete/:entryID", (req, res) => {
    console.log("reached here **********************");
    updateStatus(req.params.entryID, 3, db).then((response) => {
      res.redirect("/");
    });
  });

  router.post("/complete/:entryID", (req, res) => {
    updateStatus(req.params.entryID, 2, db).then((response) => {
      res.redirect("/");
    });
  });

  router.get("/edit/:entryID", (req, res) => {
    getTitleByEntryId(req.params.entryID, db).then((response) => {
      const templateVars = {
        entryID: req.params.entryID,
        title: response.title
      };
      res.render("edit", templateVars);
    });
  });

  router.post("/edit/:entryID", (req, res) => {
    console.log(req.body);

    let newCategoryID;
    if (!req.body.option) {
      newCategoryID = Promise.resolve(
        getCategoryIdByEntryId(req.params.entryID, db)
      );
    } else if (req.body.option === "Miscellaneous") {
      newCategoryID = 1;
    } else if (req.body.option === "Books") {
      newCategoryID = 2;
    } else if (req.body.option === "Multimedia") {
      newCategoryID = 3;
    } else if (req.body.option === "Food") {
      newCategoryID = 4;
    } else if (req.body.option === "Shopping") {
      newCategoryID = 5;
    }
  });

  return router;
};
