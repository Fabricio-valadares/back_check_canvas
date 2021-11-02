const { CheckRepo } = require("../repositories/check.repo.js")

class GetOneCheckServices {
    static async getOneServices(name_module, num_input, id_user) {
        const oneCheck = await CheckRepo.findOneCheck(name_module, num_input, id_user)

        return oneCheck
    }
}

module.exports = { GetOneCheckServices }
