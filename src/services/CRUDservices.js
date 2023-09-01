const { database } = require("../config/configDatabase");

const getAccounts = async (id = undefined) => {
    try {
        if (id) {
            const result = await database.query(
                "SELECT * FROM accounts WHERE id = $1 ORDER BY id",
                [id]
            );
            return result.rows[0];
        } else {
            const result = await database.query(
                "SELECT * FROM accounts ORDER BY id"
            );
            return result.rows;
        }
    } catch (error) {
        console.log(error.message);
    }
};

const createAccount = async (req) => {
    try {
        const result = await getAccounts();
        let id = 1;
        for (const account of result) {
            if (account && account.id === id) ++id;
            else break;
        }
        let sql =
            "INSERT INTO accounts (id, username, password) VALUES ($1, $2, $3)";
        await database.query(sql, [id, req.body.username, req.body.password]);
    } catch (error) {
        console.log(">>>>", error.message);
    }
};

const editAccount = async (req) => {
    try {
        let sql =
            "UPDATE accounts SET username = $1, password = $2 WHERE id = $3";
        await database.query(sql, [
            req.body.username,
            req.body.password,
            req.params.id,
        ]);
    } catch (error) {
        console.log(">>>>", error.message);
    }
};

const deleteAccount = async (req) => {
    try {
        let sql = "DELETE FROM accounts WHERE id = $1";
        await database.query(sql, [req.params.id]);
    } catch (error) {
        console.log(">>>>", error.message);
    }
};

module.exports = {
    getAccounts,
    createAccount,
    editAccount,
    deleteAccount,
};
