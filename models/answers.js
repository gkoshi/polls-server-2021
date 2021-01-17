const type = require("sequelize/lib/data-types");
const db = require("../config/db");

const answerModel = db.define("answers", {
  id: {
    type: type.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  question_id: {
    type: type.INTEGER(11),
  },
  option: {
    type: type.STRING(255),
    allowNull: false,
    unique: true,
  },
  created_by: {
    type: type.INTEGER(11),
  },
  modified_by: {
    type: type.INTEGER(11),
  },
});

module.exports = answerModel;
