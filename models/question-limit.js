const type = require('sequelize/lib/data-types');
const db = require('../config/db');

const questionLimitModel = db.define('question_limit', {
  id: {
    type: type.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: type.INTEGER(11),
  },
  limit: {
    type: type.INTEGER(11),
  },
  from_date: {
    type: type.DATE,
  },
  to_date: {
    type: type.DATE,
  },
  created_by: {
    type: type.INTEGER(11),
  },
  modified_by: {
    type: type.INTEGER(11),
  },
});

module.exports = questionLimitModel;
