const express = require("express");
const router = express.Router();
const categoryQueries = require("../lib/categories-queries");
const { getEntriesByCategory } = require('../db/db.js');

router.get('/:id', (req, res) => {
  const userID = 1;
  let category;
  switch (req.params.id) {
    case 'misc':
      category = 1;
      break;
    case 'reading':
      category = 2;
      break;
    case 'multimedia':
      category = 3;
      break;
    case 'food':
      category = 4;
      break;
    case 'buying':
      category = 5;
      break;
  }
  getEntriesByCategory(userID, category)
    .then(response => {
      const templateVars = {
        category: category,
        entries: response
      }
      res.render('category', templateVars);
    });
});
module.exports = router;
