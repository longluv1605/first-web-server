const { database } = require("../config/configDatabase");

const getAccounts = async (id = undefined) => {
    try {
        if (id) {
            const result = await database.query("SELECT * FROM accounts WHERE id = $1 ORDER BY id", [id]);
            return result.rows[0];
        } else {
            const result = await database.query("SELECT * FROM accounts ORDER BY id");
            return result.rows;
        }
    } catch (error) {
        console.log(error.message);
    }
};

const createAccount = async (req) => {
    try {
        let sql = "INSERT INTO accounts (username, password) VALUES ($1, $2)";
        await database.query(sql, [req.body.username, req.body.password]);
    } catch (error) {
        console.log(">>>>", error.message);
    }
};

const editAccount = async (req) => {
    try {
        let sql = "UPDATE accounts SET username = $1, password = $2 WHERE id = $3";
        await database.query(sql, [req.body.username, req.body.password, req.params.id]);
    } catch (error) {
        console.log(">>>>", error.message);
    }
};

module.exports = {
    getAccounts,
    createAccount,
    editAccount
};
