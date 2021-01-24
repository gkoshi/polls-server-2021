const QuestionOptions = require("../models/question-options");

const createQuestionOption = async (req, res, next) => {
  const {
    question_id,
    price,
    show_from,
    show_till,
    show_minutes,
    created_by,
    modified_by,
  } = req.body;

  try {
    await QuestionOptions.create({
      question_id,
      price,
      show_from,
      show_till,
      show_minutes,
      created_by,
      modified_by,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(200).json({ message: "Question option created successfully" });
};

const editQuestionOption = async (req, res, next) => {
  const { id } = req.params;
  const {
    question_id,
    price,
    show_from,
    show_till,
    show_minutes,
    created_by,
    modified_by,
  } = req.body;

  let questionOption;
  try {
    questionOption = await QuestionOptions.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!questionOption) {
    return res.status(422).json({ message: "Question option doesn't exist" });
  }

  try {
    await QuestionOptions.update(
      {
        question_id,
        price,
        show_from,
        show_till,
        show_minutes,
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

  res.status(201).json({ message: "Question option updated successfully" });
};

const deleteQuestionOption = async (req, res, next) => {
  const { id } = req.params;

  let questionOption;
  try {
    questionOption = await QuestionOptions.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!questionOption) {
    return res.status(422).json({ message: "Question option doesn't exist" });
  }

  try {
    await QuestionOptions.destroy({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "Could not delete question option" });
  }

  res.status(200).json({ message: "Question option deleted successfully" });
};

const getQuestionOptionById = async (req, res, next) => {
  const { id } = req.params;

  let questionOption;
  try {
    questionOption = await QuestionOptions.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  // there is a no user with this id
  if (!questionOption) {
    return res.status(422).json({ message: "Question option doesn't exist" });
  }

  res.status(200).json({ questionOption });
};

const getAllQuestionOptions = async (req, res, next) => {
  let questionOptions;
  try {
    questionOptions = await QuestionOptions.findAll();
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "Could not fetch all question options" });
  }

  res.status(200).json({ questionOptions });
};

module.exports = {
  createQuestionOption,
  editQuestionOption,
  deleteQuestionOption,
  getQuestionOptionById,
  getAllQuestionOptions,
};
