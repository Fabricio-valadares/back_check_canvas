const { ListAllCheckServices } = require("../services/listAllCheck.services")

class ListAllCheckController {
    static async execute(request, response) {
        const { name_module, id_user } = request.query

        const listAllCheck = await ListAllCheckServices.listAllServices(name_module, id_user)

        return response.json(listAllCheck)
    }
}

module.exports = { ListAllCheckController }
