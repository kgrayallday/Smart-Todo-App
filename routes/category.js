const { Router } = require("express");
const express = require("express");
const router = express.Router();
const userQueries = require("../lib/users-queries");

router.get("/", (req, res) => {
    // userQueries.getUsers().then((res) => console.log(res, typeof res)); for testing, please ignore
    res.render("index");
});

router.get("/:category", (req, res) => {
    console.log('reached');
    res.send(req.params.category);
});

module.exports = router;