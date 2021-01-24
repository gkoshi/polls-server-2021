const Question = require("../models/question");
const Answer = require("../models/answers");
const Category = require("../models/question-categories");
const Country = require("../models/country");
const City = require("../models/city");

const createQuestion = async (req, res, next) => {
  const { question, city_id, country_id, category, range, answers } = req.body;

  const image = req.file.filename;

  try {
    const response = await Question.create(
      {
        question,
        city_id,
        country_id,
        category,
        image,
        range,
      },
      {
        raw: true,
        plain: true,
      }
    );

    const result = response.get({ plain: true });
    const mappedAnswers = JSON.parse(answers).map((el) => ({
      question_id: result.id,
      option: el,
    }));

    await Answer.bulkCreate(mappedAnswers);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(200).json({ message: "Question created successfully" });
};

const editQuestion = async (req, res, next) => {
  const { id } = req.params;
  const {
    question, city_id, country_id, category, range, answers
  } = req.body;

  let questionExists;
  try {
    questionExists = await Question.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!questionExists) {
    return res.status(422).json({ message: "Question doesn't exist" });
  }

  const image = req?.file?.filename;
  const result = questionExists.get({ plain: true });
  const mappedAnswers = JSON.parse(answers).map((el) => ({
    question_id: result.id,
    option: el,
  }));

  try {
    await Question.update(
      {
        question,
        city_id,
        country_id,
        category,
        image: image || result.image,
        range,
      },
      {
        where: { id },
      }
    );
    await Answer.destroy({ where: { question_id: result.id }});
    await Answer.bulkCreate(mappedAnswers);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(201).json({ message: "Question updated successfully" });
};

const deleteQuestion = async (req, res, next) => {
  const { id } = req.params;

  let question;
  try {
    question = await Question.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!question) {
    return res.status(422).json({ message: "Question doesn't exist" });
  }

  try {
    await Question.destroy({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not delete question" });
  }

  res.status(200).json({ message: "Question deleted successfully" });
};

const getQuestionById = async (req, res, next) => {
  const { id } = req.params;

  let question;
  try {
    question = await Question.findOne({
      include: [
        {
          model: Country,
        },
        {
          model: City,
        },
        {
          model: Category,
        },
        {
          model: Answer,
        },
      ],
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!question) {
    return res.status(422).json({ message: "Question doesn't exist" });
  }

  res.status(200).json({ question: question });
};

const getAllQuestions = async (req, res, next) => {
  let questions;
  try {
    questions = await Question.findAll({
      include: [
        {
          model: Country,
        },
        {
          model: City,
        },
        {
          model: Category,
        },
        {
          model: Answer,
        },
      ],
    });
  } catch (err) {
    return res.status(400).json({ message: "Could not fetch all question" });
  }

  res.status(200).json({ questions: questions });
};

module.exports = {
  createQuestion,
  editQuestion,
  deleteQuestion,
  getQuestionById,
  getAllQuestions,
};
