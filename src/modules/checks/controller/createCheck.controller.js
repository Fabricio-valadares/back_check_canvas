const { CreateCheckServices } = require("../services/create.services.js")

class CreateCheckController {
    static async execute(request, response) {
        const { numInput, nameModule, user, id_user } = request.body

        const newCheck = await CreateCheckServices.createServices({ num_input: numInput, name_module: nameModule, user, id_user })

        return response.json(newCheck)
    }
}
module.exports = { CreateCheckController }
