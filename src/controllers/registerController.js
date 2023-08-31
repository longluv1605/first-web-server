const services = require('../services/CRUDservices');

const getRegisterPage = (req, res) => {
    return res.render("register.ejs");
};

const postRegisterPage = async (req, res) => {
    await services.createAccount(req);
    res.redirect("/");
};

module.exports = {
    getRegisterPage,
    postRegisterPage,
};
