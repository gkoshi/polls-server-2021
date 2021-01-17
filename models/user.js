const db = require("../config/db");
const type = require("sequelize/lib/data-types");

const userModel = db.define("users", {
  id: {
    type: type.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: type.STRING,
  },
  lastname: {
    type: type.STRING,
  },
  username: {
    type: type.STRING,
    unique: true,
  },
  email: {
    type: type.STRING,
  },
  password: {
    type: type.NUMBER,
  },
});

module.exports = userModel;
