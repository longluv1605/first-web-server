const homeController = require("../controllers/homeController");
const infoController = require("../controllers/infoController");
const express = require("express");
const router = express.Router();

// Home
router.get("/", homeController.getHomePage);
router.post("/create", homeController.postHomePage);

// Info
router.get("/info", infoController.getInfoPage);

module.exports = router;
