const db = require("../config/db");
const type = require("sequelize/lib/data-types");

const cityModel = db.define("cities", {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  country_id: {
    type: type.INTEGER,
  },
  name: {
    type: type.STRING,
  },
  population: {
    type: type.BIGINT,
  },
});

module.exports = cityModel;
