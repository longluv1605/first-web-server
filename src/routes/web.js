const homeController = require("../controllers/homeController");
const registerController = require("../controllers/registerController");
const express = require("express");
const router = express.Router();

// Home
router.get("/", homeController.getHomePage);

// Register
router.post("/register", registerController.postRegisterPage);
router.get("/register", registerController.getRegisterPage);

module.exports = router;
