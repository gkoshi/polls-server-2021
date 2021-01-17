const type = require("sequelize/lib/data-types");
const db = require("../config/db");

const agentsModel = db.define("agents", {
  id: {
    type: type.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: type.STRING(255),
  },
  phone: {
    type: type.STRING(50),
  },
  code: {
    type: type.INTEGER(11),
    allowNull: false,
    unique: true,
  },
});

module.exports = agentsModel;
