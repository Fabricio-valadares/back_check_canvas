const { CheckRepo } = require("../repositories/check.repo.js")

class ListAllCheckServices {
    static async listAllServices(name_module, id_user) {
        const listAllCheck = await CheckRepo.findAllCheck(name_module, id_user)

        return listAllCheck
    }
}

module.exports = { ListAllCheckServices }
