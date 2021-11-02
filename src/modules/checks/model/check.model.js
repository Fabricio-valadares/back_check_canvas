const { Model, DataTypes } = require("sequelize")

class CheckModel extends Model {
   static init(sequelize) {
       super.init({
        num_input: DataTypes.INTEGER,
        name_module: DataTypes.STRING,
        id_user: DataTypes.STRING,
        user: DataTypes.STRING
       }, {
        sequelize,
        modelName: 'checks'
    })
   }
}

module.exports = { CheckModel }
