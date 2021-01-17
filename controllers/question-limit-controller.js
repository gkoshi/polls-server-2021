const QuestionLimit = require('../models/question-limit');

const createQuestionLimit = async (req, res, next) => {
  const {
    user_id,
    limit,
    from_date,
    to_date,
    created_by,
    modified_by,
  } = req.body;

  try {
    await QuestionLimit.create({
      user_id,
      limit,
      from_date,
      to_date,
      created_by,
      modified_by,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something went wrong' });
  }

  res.status(200).json({ message: 'Question limit created successfully' });
};

const editQuestionLimit = async (req, res, next) => {
  const { id } = req.params;
  const {
    user_id,
    limit,
    from_date,
    to_date,
    created_by,
    modified_by,
  } = req.body;

  let questionLimit;
  try {
    questionLimit = await QuestionLimit.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something went wrong' });
  }

  if (!questionLimit) {
    return res.status(422).json({ message: "Question limit doesn't exist" });
  }

  try {
    await QuestionLimit.update(
      {
        user_id,
        limit,
        from_date,
        to_date,
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

  res.status(201).json({ message: 'Question limit updated successfully' });
};

const deleteQuestionLimit = async (req, res, next) => {
  const { id } = req.params;

  let questionLimit;
  try {
    questionLimit = await QuestionLimit.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something went wrong' });
  }

  if (!questionLimit) {
    return res.status(422).json({ message: "Question limit doesn't exist" });
  }

  try {
    await QuestionLimit.destroy({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Could not delete question limit' });
  }

  res.status(200).json({ message: 'Question limit deleted successfully' });
};

const getQuestionLimitById = async (req, res, next) => {
  const { id } = req.params;

  let questionLimit;
  try {
    questionLimit = await QuestionLimit.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something went wrong' });
  }

  // there is a no user with this id
  if (!questionLimit) {
    return res.status(422).json({ message: "Question limit doesn't exist" });
  }

  res.status(200).json({ questionLimit });
};

module.exports = {
  createQuestionLimit,
  editQuestionLimit,
  deleteQuestionLimit,
  getQuestionLimitById,
};
