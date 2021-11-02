const { GetOneCheckServices } = require("../services/getOneCheck.services.js")

class GetOneCheckController {
    static async execute(request, response) {
        const { name_module, num_input, id_user } = request.query

        const oneCheck = await GetOneCheckServices.getOneServices(name_module, num_input, id_user)

        return response.json(oneCheck)
    }
}

module.exports = { GetOneCheckController }
