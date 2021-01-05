const authMutations = require("./auth/auth.mutations");
const accountMutations = require("./account/account.mutations");
const eventMutations = require("./event/event.mutations");
const applicationMutations = require("./application/application.mutations")
const contractMutations = require("./contract/contract.mutations")

module.exports = {
    ...authMutations,
    ...accountMutations,
    ...contractMutations,
    ...eventMutations,
    ...applicationMutations
};
