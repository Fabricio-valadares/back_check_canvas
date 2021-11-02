const { DeleteCheckServices } = require("../services/delete.services")

class DeleteCheckController {
    static async execute(request, response) {
        const { name_module, num_input, id_user } = request.query

        const result = await DeleteCheckServices.deleteServices(name_module, num_input, id_user)

        return response.json(result)
    }
}

module.exports = { DeleteCheckController }
