const { Sequelize } = require("sequelize");
const dbconfig = require("../config");
const { CheckModel } = require("../../modules/checks/model/check.model.js")

const connectdb = new Sequelize(dbconfig);

CheckModel.init(connectdb)

module.exports = { connectdb };
