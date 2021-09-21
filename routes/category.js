const express = require("express");
const router = express.Router();
const query = require("../db/db");

router.get("/", (req, res) => {
  // userQueries.getUsers().then((res) => console.log(res, typeof res)); for testing, please ignore
  res.render("index");
});

router.get("/:category", (req, res) => {
  console.log(req.params.category);
  const userID = 1 || req.session.userID;
  query.getEntriesByCategory(userID, req.params.category).then((response) => {
    console.log(response);
    res.render("category", response);
  });
});

module.exports = router;
