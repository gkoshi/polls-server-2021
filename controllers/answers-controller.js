const Answers = require("../models/answers");

const createAnswer = async (req, res, next) => {
  const { question_id, option, created_by, modified_by } = req.body;

  try {
    await Answers.create({
      question_id,
      option,
      created_by,
      modified_by,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(200).json({ message: "Answer created successfully" });
};

const editAnswer = async (req, res, next) => {
  const { id } = req.params;
  const { question_id, option, created_by, modified_by } = req.body;

  let answer;
  try {
    answer = await Answers.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!answer) {
    return res.status(422).json({ message: "Answer doesn't exist" });
  }

  try {
    await Answers.update(
      {
        question_id,
        option,
        created_by,
        modified_by,
      },
      {
        where: { id },
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(201).json({ message: "Answer updated successfully" });
};

const deleteAnswer = async (req, res, next) => {
  const { id } = req.params;

  let answer;
  try {
    answer = await Answers.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!answer) {
    return res.status(422).json({ message: "Answer doesn't exist" });
  }

  try {
    await Answers.destroy({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not delete answer" });
  }

  res.status(200).json({ message: "Answer deleted successfully" });
};

const getAnswerById = async (req, res, next) => {
  const { id } = req.params;

  let answer;
  try {
    answer = await Answers.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }
  id;
  // there is a no user with this id
  if (!answer) {
    return res.status(422).json({ message: "Answer doesn't exist" });
  }

  res.status(200).json({ answer });
};

const getAllAnswers = async (req, res, next) => {
  let answers;
  try {
    answers = await Answers.findAll();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not fetch all answers" });
  }

  res.status(200).json({ answers });
};

module.exports = {
  createAnswer,
  editAnswer,
  deleteAnswer,
  getAnswerById,
  getAllAnswers,
};
