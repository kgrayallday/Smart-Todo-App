const { Router } = require("express");
const express = require("express");
const router = express.Router();
const categoryQueries = require("../lib/categories-queries");

router.get("/", (req, res) => {
    // userQueries.getUsers().then((res) => console.log(res, typeof res)); for testing, please ignore
    res.render("index");
});

router.get("/:category", (req, res) => {
    const userID = req.session.id;
    categoryQueries
        .getCategoriesByCategory(req.params.category, userID)
        .then((response) => {
            res.render("category", response);
        });
});

module.exports = router;