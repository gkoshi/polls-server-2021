const QuestionCategories = require("../models/question-categories");

const createQuestionCategory = async (req, res, next) => {
  const { name } = req.body;

  try {
    await QuestionCategories.create({
      name,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(200).json({ message: "Question category created successfully" });
};

const editQuestionCategory = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  let questionCategory;
  try {
    questionCategory = await QuestionCategories.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!questionCategory) {
    return res.status(422).json({ message: "Question category doesn't exist" });
  }

  try {
    await QuestionCategories.update(
      {
        name,
      },
      {
        where: { id },
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(201).json({ message: "Question category updated successfully" });
};

const deleteQuestionCategory = async (req, res, next) => {
  const { id } = req.params;

  let questionCategory;
  try {
    questionCategory = await QuestionCategories.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!questionCategory) {
    return res.status(422).json({ message: "Question category doesn't exist" });
  }

  try {
    await QuestionCategories.destroy({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "Could not delete question category" });
  }

  res.status(200).json({ message: "Question category deleted successfully" });
};

const getQuestionCategoryById = async (req, res, next) => {
  const { id } = req.params;

  let questionCategory;
  try {
    questionCategory = await QuestionCategories.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  // there is a no user with this id
  if (!questionCategory) {
    return res.status(422).json({ message: "Question category doesn't exist" });
  }

  res.status(200).json({ questionCategory });
};

const getAllQuestionCategories = async (req, res, next) => {
  let questionCategories;
  try {
    questionCategories = await QuestionCategories.findAll();
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "Could not fetch all question categories" });
  }

  res.status(200).json({ questionCategories });
};

module.exports = {
  createQuestionCategory,
  editQuestionCategory,
  deleteQuestionCategory,
  getQuestionCategoryById,
  getAllQuestionCategories,
};
