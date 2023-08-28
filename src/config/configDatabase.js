require("dotenv").config();
const { Pool } = require("pg");

const database = new Pool({
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
});

module.exports = { database };
