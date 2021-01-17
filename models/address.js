const db = require("../config/db");
const type = require("sequelize/lib/data-types");

const addressModel = db.define("address", {
  id: {
    type: type.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  city_id: {
    type: type.INTEGER,
  },
  country_id: {
    type: type.INTEGER,
  },
  name: {
    type: type.STRING,
  },
});

module.exports = addressModel;
