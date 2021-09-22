const express = require("express");
const router = express.Router();
const  { getUserById, getUnfinishedEntriesCountById } = require("../db/db");

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log(req.session.userID);
    const user = Promise.resolve(getUserById(req.session ? req.session.userID : 1, db));
    const unfinishedEntriesCount = Promise.resolve(getUnfinishedEntriesCountById(req.session ? req.session.userID : 1, db));

    Promise.all([user, unfinishedEntriesCount]).then((values) => {
      const user = values[0];
      const unfinishedEntriesCount = values[1];
      const templateVars = {
        name: user.name,
        unfinishedEntriesCount: unfinishedEntriesCount.unfinished_entries_count
      }
      console.log(templateVars);
      res.render("index", templateVars);
    });

    // .then((response) => {
    //   const templateVars = {
    //     name: response.name
    //   };
    //   res.render("index", templateVars);
    // });
  });
  return router;
};
