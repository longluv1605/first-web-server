require("dotenv").config();
const express = require("express");
const path = require("path");
const config = require("./config/config");
const webRoutes = require("./routes/web");

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

//Config
config(app);

// Def route
app.use("/", webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
