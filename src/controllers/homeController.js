const { database } = require("../config/configDatabase");

let users = [
    {
        id: 1,
        username: "abc",
        password: "123",
    },
    {
        id: 2,
        username: "abc",
        password: "123",
    },
    {
        id: 3,
        username: "abc",
        password: "123",
    },
];

const getHomePage = async (req, res) => {
    try {
        const result = await database.query("SELECT * FROM users");
        res.json(result.rows);
    } catch (error) {
        console.log(">>>>", error.message);
    }
};

const postHomePage = async (req, res) => {
    try {
        let sql = "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *";
        await database.query(sql, [
            users[0].username,
            users[0].password,
        ]);
        const result = await database.query("SELECT * FROM users");
        res.json(result.rows);
    } catch (error) {
        console.log(">>>>", error.message);
    }
};

module.exports = {
    getHomePage,
    postHomePage
};
