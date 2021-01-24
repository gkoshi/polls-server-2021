const type = require("sequelize/lib/data-types");
const db = require("../config/db");

const questionModel = db.define("question", {
  id: {
    type: type.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  question: {
    type: type.STRING(255),
  },
  image: {
    type: type.STRING(255),
  },
  country_id: {
    type: type.INTEGER(11),
  },
  city_id: {
    type: type.INTEGER(11),
  },
  range: {
    type: type.INTEGER(11),
  },
  category: {
    type: type.INTEGER(11),
  },
  created_by: {
    type: type.INTEGER(11),
  },
  modified_by: {
    type: type.INTEGER(11),
  },
});

module.exports = questionModel;
