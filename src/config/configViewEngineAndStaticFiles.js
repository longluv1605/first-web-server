const express = require("express");
const path = require("path");

// Config views engine and static files
const configViewEngineAndStaticFiles = (app) => {
    // Config  template engine
    app.set("views", "./src/views");
    app.set("view engine", "ejs");

    //config public files (static files)
    app.use(express.static("./src/public"));
};

module.exports = configViewEngineAndStaticFiles;