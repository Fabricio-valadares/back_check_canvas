const { CheckModel } = require("../model/check.model.js")

class CheckRepo {
    static async create(data) {
        const newCheck = await CheckModel.create(data)

        return newCheck
    }

    static async findAllCheck(name_module, id_user) {
        const allCheck = await CheckModel.findAll({
            where: {
                name_module: name_module,
                id_user: id_user
            }
        })

        return allCheck
    }

    static async findOneCheck(name_module, num_input, id_user) {
        const oneCheck = await CheckModel.findOne({
            where: {
                name_module: name_module,
                num_input: num_input,
                id_user: id_user
            }
        })

        return oneCheck
    }

    static async deleteCheck(name_module, num_input, id_user) {
        try {
            await CheckModel.destroy({
                where: {
                    name_module: name_module,
                    num_input: num_input,
                    id_user: id_user
                }
            })

            return true

        } catch(error) {
            return false
        }
        
    }
}

module.exports = { CheckRepo }
