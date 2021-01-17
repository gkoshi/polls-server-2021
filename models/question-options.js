const type = require("sequelize/lib/data-types");
const db = require("../config/db");

const questionOptionsModel = db.define("question_options", {
  id: {
    type: type.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  question_id: {
    type: type.INTEGER(11),
  },
  price: {
    type: type.DECIMAL(10, 2),
  },
  show_from: {
    type: type.DATE,
  },
  show_till: {
    type: type.DATE,
  },
  show_minutes: {
    type: type.INTEGER(11),
  },
  created_by: {
    type: type.INTEGER(11),
  },
  modified_by: {
    type: type.INTEGER(11),
  },
});

module.exports = questionOptionsModel;
