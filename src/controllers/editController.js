const services = require("../services/CRUDservices");

const putEditPage = async (req, res) => {
    await services.editAccount(req);
    res.redirect("/");
    // res.send("Updated");
};

const getEditPage = async (req, res) => {
    const result = await services.getAccounts(req.params.id);
    // console.log(result);
    return res.render("edit.ejs", { data: result });
};

module.exports = {
    putEditPage,
    getEditPage,
};
