const { CheckRepo } = require("../repositories/check.repo.js")

class CreateCheckServices {
    static async createServices(data) {
        const newCheck = await CheckRepo.create(data)

        return newCheck
    }
}

module.exports = { CreateCheckServices }
