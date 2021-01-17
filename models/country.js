const db = require('../config/db');
const type = require('sequelize/lib/data-types');

const countryModel = db.define('country', {
  id: {
    type: type.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: type.STRING,
  },
  code: {
    type: type.STRING,
  },
  population: {
    type: type.BIGINT,
  },
});

module.exports = countryModel;
