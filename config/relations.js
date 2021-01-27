const Relations = (db) => {
  const City = require("../models/city");
  const Country = require("../models/country");
  const Question = require("../models/question");
  const Category = require("../models/question-categories");
  const Answer = require("../models/answers");

  Country.hasMany(City, { sourceKey: "id", foreignKey: "country_id" });
  City.belongsTo(Country, { foreignKey: "country_id", targetKey: "id" });

  Question.belongsTo(Category, { foreignKey: "category", targetKey: "id" });
  Question.belongsTo(Country, { foreignKey: "country_id", targetKey: "id" });
  Question.belongsTo(City, { foreignKey: "city_id", targetKey: "id" });
  Question.hasMany(Answer, { foreignKey: "question_id", targetKey: "id" });
};

module.exports = Relations;
