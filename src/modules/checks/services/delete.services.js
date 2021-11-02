const { CheckRepo } = require("../repositories/check.repo.js")

class DeleteCheckServices {
    static async deleteServices(name_module, num_input, id_user) {
        const itemInput = await CheckRepo.findOneCheck(name_module, num_input, id_user)

        if (!itemInput) {
            return { message: "Check is not exists" }
        }

        const result = await CheckRepo.deleteCheck(name_module, num_input, id_user)

        if (!result) {
            return { message: "it was not possible to delete" }
        }

    }
}

module.exports = { DeleteCheckServices }
