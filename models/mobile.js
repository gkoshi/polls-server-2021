const db = require("../config/db");
const type = require("sequelize/lib/data-types");

const mobileUser = db.define("mobile_user", {
  id: {
    type: type.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  gender: {
    type: type.STRING,
  },
  age_range: {
    type: type.STRING,
  },
  phone: {
    type: type.STRING,
    unique: true,
  },
  country_id: {
    type: type.STRING,
  },
  city_id: {
    type: type.NUMBER,
  },
  settlement_id: {
    type: type.STRING,
  },
  question_category: {
    type: type.INTEGER,
  },
  code: {
    type: type.STRING,
  },
  device_id: {
    type: type.STRING,
  },
});

module.exports = mobileUser;
