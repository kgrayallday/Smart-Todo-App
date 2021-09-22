const express = require("express");
const router = express.Router();
const { getUserById, getCompletedEntriesById, getUnfinishedEntriesById, getUserCreationDate  } = require("../db/db");

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("cookie id: ", req.session.userID);
    const user = Promise.resolve(getUserById(req.session ? req.session.userID : 1, db));
    const completedEntries = Promise.resolve(getCompletedEntriesById(req.session ? req.session.userID : 1, db));
    const unfinishedEntries = Promise.resolve(getUnfinishedEntriesById(req.session ? req.session.userID : 1, db));
    const userCreatedDate = Promise.resolve(getUserCreationDate(req.session ? req.session.userID : 1, db));
    Promise.all([user, completedEntries, unfinishedEntries, userCreatedDate]).then((values) => {
       const user = values[0];
       const completedEntries = values[1];
       const unfinishedEntries = values[2];
       const userCreatedDate = values[3];
       const templateVars = {
         email: user.email,
         name: user.name,
         completedEntries: completedEntries,
         unfinishedEntries: unfinishedEntries,
         userCreatedDate: userCreatedDate.user_creation_date.toString()
       }
       console.log("here here: ", typeof templateVars.userCreatedDate, templateVars.userCreatedDate);
       res.render('profile', templateVars)
    });

  });
  return router;
};
