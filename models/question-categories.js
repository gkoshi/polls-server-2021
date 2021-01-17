const type = require("sequelize/lib/data-types");
const db = require("../config/db");

const questionCategoriesModel = db.define("questions_categories", {
  id: {
    type: type.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: type.STRING(255),
  },
});

module.exports = questionCategoriesModel;
