const homeController = require("../controllers/homeController");
const registerController = require("../controllers/registerController");
const editController = require("../controllers/editController");
const express = require("express");
const router = express.Router();

// Home
router.get("/", homeController.getHomePage);

// Register
router.post("/register", registerController.postRegisterPage);
router.get("/register", registerController.getRegisterPage);

// Edit
router.post("/edit/:id", editController.putEditPage);
router.get("/edit/:id", editController.getEditPage);

module.exports = router;
