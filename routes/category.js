const express = require("express");
const router = express.Router();
const {
  getActiveEntriesByCategory,
  updateStatus,
  updateTitle,
  getCategoryIdByEntryId,
  getTitleByEntryId,
  updateCategory,
} = require("../db/db");

module.exports = (db) => {
  router.get("/:category", (req, res) => {
    let categoryId, pageTitle;
    if (req.params.category === "misc") {
      categoryId = 1;
      pageTitle = 'Miscellaneous';
    } else if (req.params.category === "reading") {
      categoryId = 2;
      pageTitle = 'Books';
    } else if (req.params.category === "multimedia") {
      categoryId = 3;
      pageTitle = 'Media';
    } else if (req.params.category === "food") {
      categoryId = 4;
      pageTitle = 'Food';
    } else if (req.params.category === "buying") {
      categoryId = 5;
      pageTitle = 'Shopping';
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
        pageTitle
      };
      res.render("category", templateVars);
    });
  });

  router.post("/delete/:entryID", (req, res) => {
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
        title: response.title,
      };
      res.render("edit", templateVars);
    });
  });

  router.post("/edit/:entryID", (req, res) => {
    let newCategoryID;
    if (!req.body.option) {
      newCategoryID = Promise.resolve(
        getCategoryIdByEntryId(req.params.entryID, db)
      );
    } else if (req.body.option === "Miscellaneous") {
      newCategoryID = Promise.resolve(1);
    } else if (req.body.option === "Books") {
      newCategoryID = Promise.resolve(2);
    } else if (req.body.option === "Multimedia") {
      newCategoryID = Promise.resolve(3);
    } else if (req.body.option === "Food") {
      newCategoryID = Promise.resolve(4);
    } else if (req.body.option === "Shopping") {
      newCategoryID = Promise.resolve(5);
    }

    newCategoryID
      .then((newCategoryID) =>
        updateCategory(req.params.entryID, newCategoryID, db)
      )
      .then(updateTitle(req.params.entryID, req.body.text, db))
      .then(res.redirect("/"));
  });

  return router;
};
