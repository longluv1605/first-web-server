const configViewEngineAndStaticFiles = require("./configViewEngineAndStaticFiles");
const database = require("./configDatabase");

// All config
const config = (app) => {
    // ConfigViewEngineAndStaticFiles
    configViewEngineAndStaticFiles(app);
};

module.exports = {
    config,
    database
};