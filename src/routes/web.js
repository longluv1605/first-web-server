const express = require("express");
const router = express.Router();

// Def route
router.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

// Def route
router.get("/info", (req, res) => {
    res.render("test.ejs");
});

module.exports = router;
