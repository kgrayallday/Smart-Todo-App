const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get('/:id', (req, res) => {
    req.session.userID = 1;
    res.redirect('/');
  });
  return router;
}
