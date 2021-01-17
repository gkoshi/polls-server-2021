const Question = require('../models/question');

const createQuestion = async (req, res, next) => {
  const {
    question,
    country_id,
    city_id,
    question_category,
    created_by,
    modified_by,
  } = req.body;

  try {
    await Question.create({
      question,
      country_id,
      city_id,
      question_category,
      created_by,
      modified_by,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something went wrong' });
  }

  res.status(200).json({ message: 'Question created successfully' });
};

const editQuestion = async (req, res, next) => {
  const { id } = req.params;
  const {
    question,
    country_id,
    city_id,
    question_category,
    created_by,
    modified_by,
  } = req.body;

  let query;
  try {
    query = await Question.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something went wrong' });
  }

  if (!query) {
    return res.status(422).json({ message: "Question doesn't exist" });
  }

  try {
    await Question.update(
      {
        question,
        country_id,
        city_id,
        question_category,
        created_by,
        modified_by,
      },
      {
        where: { id },
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something went wrong' });
  }

  res.status(201).json({ message: 'Question updated successfully' });
};

const deleteQuestion = async (req, res, next) => {
  const { id } = req.params;

  let query;
  try {
    query = await Question.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something went wrong' });
  }

  if (!query) {
    return res.status(422).json({ message: "Question doesn't exist" });
  }

  try {
    await Question.destroy({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Could not delete question' });
  }

  res.status(200).json({ message: 'Question deleted successfully' });
};

const getQuestionById = async (req, res, next) => {
  const { id } = req.params;

  let query;
  try {
    query = await Question.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something went wrong' });
  }

  // there is a no user with this id
  if (!query) {
    return res.status(422).json({ message: "Question doesn't exist" });
  }

  res.status(200).json({ query });
};

const getAllQuestions = async (req, res, next) => {
  let queries;
  try {
    queries = await Question.findAll();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Could not fetch all question' });
  }

  res.status(200).json({ queries });
};

module.exports = {
  createQuestion,
  editQuestion,
  deleteQuestion,
  getQuestionById,
  getAllQuestions,
};
