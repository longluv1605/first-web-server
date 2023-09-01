const CRUDservices = require('../services/CRUDservices');

const readAccounts = async (req, res) => {
    const data = await CRUDservices.getAccounts();
    return res.status(200).json({
        messsage: "Get list accounts successfully",
        data: data
    });
};

const updateAccount = async (req, res) => {
    await CRUDservices.editAccount(req.params.id);
    return res.status(200).json({
        messsage: "Updated",
    });
}

const createAccount = async (req, res) => {
    await CRUDservices.createAccount(req);
    return res.status(200).json({
        messsage: "Registered",
    });
}

const deleteAccount = async (req, res) => {
    await CRUDservices.deleteAccount(req);
    return res.status(200).json({
        messsage: "Deleted",
    });
}

module.exports = {
    readAccounts,
    updateAccount,
    createAccount,
    deleteAccount
};