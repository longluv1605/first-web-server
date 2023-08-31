const services = require('../services/CRUDservices');

const getHomePage = async (req, res) => {
    const result = await services.getAccounts();
    // console.log(result);
    return res.render("home.ejs", { listAccounts: result });
};

module.exports = {
    getHomePage,
};
