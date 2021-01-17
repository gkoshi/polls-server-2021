const AgeRange = require('../models/age-range');

const createAgeRange = async (req, res, next) => {
  const { start, end } = req.body;

  try {
    await AgeRange.create({
      start,
      end,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something went wrong' });
  }

  res.status(200).json({ message: 'Age range created successfully' });
};

const editAgeRange = async (req, res, next) => {
  const { id } = req.params;
  const { start, end } = req.body;

  let ageRange;
  try {
    ageRange = await AgeRange.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something went wrong' });
  }

  if (!ageRange) {
    return res.status(422).json({ message: "Age range doesn't exist" });
  }

  try {
    await AgeRange.update(
      {
        start,
        end,
      },
      {
        where: { id },
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something went wrong' });
  }

  res.status(201).json({ message: 'Age range updated successfully' });
};

const deleteAgeRange = async (req, res, next) => {
  const { id } = req.params;

  let ageRange;
  try {
    ageRange = await AgeRange.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something went wrong' });
  }

  if (!ageRange) {
    return res.status(422).json({ message: "Age range doesn't exist" });
  }

  try {
    await AgeRange.destroy({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Could not delete age range' });
  }

  res.status(200).json({ message: 'Age range deleted successfully' });
};

const getAgeRangeById = async (req, res, next) => {
  const { id } = req.params;

  let ageRange;
  try {
    ageRange = await AgeRange.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something went wrong' });
  }
  id;
  // there is a no user with this id
  if (!ageRange) {
    return res.status(422).json({ message: "Age range doesn't exist" });
  }

  res.status(200).json({ ageRange });
};

const getAllAgeRanges = async (req, res, next) => {
  let ageRanges;
  try {
    ageRanges = await AgeRange.findAll();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Could not fetch all age ranges' });
  }

  res.status(200).json({ ageRanges });
};

module.exports = {
  createAgeRange,
  editAgeRange,
  deleteAgeRange,
  getAgeRangeById,
  getAllAgeRanges,
};
