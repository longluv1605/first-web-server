const { database } = require("../config/configDatabase");

const getRegisterPage = (req, res) => {
    res.render("register.ejs");
};

const postRegisterPage = async (req, res) => {
    try {
        let sql = "INSERT INTO users (username, password) VALUES ($1, $2)";
        await database.query(sql, [
            req.body.username,
            req.body.password
        ]);
        // alert("Registed!");
        await res.redirect('/');

    } catch (error) {
        console.log(">>>>", error.message);
    }
    // res.json(req.body);
};

module.exports = {
    getRegisterPage,
    postRegisterPage,
};
