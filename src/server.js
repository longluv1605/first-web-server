require("dotenv").config();
const express = require("express");
/* const config = require("./config/config");*/
const webRoutes = require("./routes/web");
const configViewEngineAndStaticFiles = require("./config/configViewEngineAndStaticFiles");

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

//Config
/* config.config(app); */
app.use(express.json()); // config for request.body
app.use(express.urlencoded({ extended: true})); // config for HTML FORM data
configViewEngineAndStaticFiles(app);

// Def route
app.use("/", webRoutes);


// Query

app.listen(port, hostname, () => {
    console.log(`Server http://${hostname}:${port}`);
});
