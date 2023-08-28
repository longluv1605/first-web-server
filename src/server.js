require("dotenv").config();
const express = require("express");
/* const config = require("./config/config");*/
const webRoutes = require("./routes/web");
const configViewEngineAndStaticFiles = require("./config/configViewEngineAndStaticFiles");

const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

//Config
/* config.config(app); */
configViewEngineAndStaticFiles(app);

// Def route
app.use("/", webRoutes);


// Query

app.listen(port, hostname, () => {
    console.log(`Server http://${hostname}:${port}`);
});
