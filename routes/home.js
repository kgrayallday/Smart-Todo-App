const express = require("express");
const router = express.Router();
const fetchDatatypes = require("../lib/helper/fetchDatatypes");
const  { getUserById } = require("../db/db");


module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log(req.session.userID);
    getUserById([req.session ? req.session.userID : 1], db)
    .then((response) => {
      const templateVars = {
        name: response.name
      };
      res.render("index", templateVars);
    });
  });
  return router;
};
