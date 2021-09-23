const express = require("express");
const router = express.Router();
const {
  getUserById,
  getCompletedEntriesById,
  getUnfinishedEntriesById,
  getUserCreationDate,
  updateUser
} = require("../db/db");

module.exports = (db) => {
  router.get("/", (req, res) => {
    const user = Promise.resolve(
      getUserById(req.session ? req.session.userID : 1, db)
    );
    const completedEntries = Promise.resolve(
      getCompletedEntriesById(req.session ? req.session.userID : 1, db)
    );
    const unfinishedEntries = Promise.resolve(
      getUnfinishedEntriesById(req.session ? req.session.userID : 1, db)
    );
    const userCreatedDate = Promise.resolve(
      getUserCreationDate(req.session ? req.session.userID : 1, db)
    );
    Promise.all([
      user,
      completedEntries,
      unfinishedEntries,
      userCreatedDate,
    ]).then((values) => {
      const user = values[0];
      const completedEntries = values[1];
      const unfinishedEntries = values[2];
      const userCreatedDate = values[3];
      const templateVars = {
        id: user.id,
        email: user.email,
        name: user.name,
        completedEntries: completedEntries,
        unfinishedEntries: unfinishedEntries,
        userCreatedDate: userCreatedDate.user_creation_date.toString(),
      };
      res.render("profile", templateVars);
    });
  });

  router.get("/edit/:id", (req, res) => {
    const templateVars = {
      id: req.params.id
    }
    res.render("profile_edit", templateVars);
  });

  router.post("/edit/:id", (req, res) => {
    getUserById(req.params.id, db).then((response) => {
      let name, email;
      if (req.body.name === '') {
        name = response.name;
      } else {
        name = req.body.name
      }
      if (req.body.email === '') {
        name = response.email;
      } else {
        email = req.body.email;
      }
      updateUser(name, email, req.params.id, db).then(res.redirect('/'))
    });
  });
  return router;
};
