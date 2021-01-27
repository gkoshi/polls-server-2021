const db = require("../config/db");
const type = require("sequelize/lib/data-types");

const journalistTable = db.define("journalists", {
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
  phone: {
    type: type.STRING,
  },
  country_id: {
    type: type.INTEGER,
  },
  city_id: {
    type: type.INTEGER,
  },
  gender: {
    type: type.STRING,
  },
  question_number: {
    type: type.STRING,
  },
  from: {
    type: type.DATE,
  },
  to: {
    type: type.DATE,
  },
});

module.exports = journalistTable;
