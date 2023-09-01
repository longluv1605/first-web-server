const express = require("express");
const router = express.Router();
const APIcontroller = require("../controllers/APIcontroller");

const initAPIrouters = (app) => {
    // GET all accounts to display at Home page.
    router.get("/", APIcontroller.readAccounts);

    // POST account to database.
    router.post("/register", APIcontroller.createAccount);

    // PUT new infomation into account.
    router.put("/edit/:id", APIcontroller.updateAccount);

    // DETELE account.
    router.delete("/delete/:id", APIcontroller.deleteAccount);

    return app.use("/api/v1/", router);
};

module.exports = initAPIrouters;
