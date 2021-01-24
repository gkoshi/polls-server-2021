const db = require("../config/db");
const type = require("sequelize/lib/data-types");

const ageRangeModel = db.define("age-range", {
  id: {
    type: type.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  start: {
    type: type.INTEGER,
  },
  end: {
    type: type.INTEGER,
  },
});

module.exports = ageRangeModel;
