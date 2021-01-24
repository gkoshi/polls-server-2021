const Country = require("../models/country");

const createCountry = async (req, res, next) => {
  const { name, code, population } = req.body;

  try {
    await Country.create({
      name,
      code,
      population,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(200).json({ message: "Country created successfully" });
};

const editCountry = async (req, res, next) => {
  const { id } = req.params;
  const { name, code, population } = req.body;

  let country;
  try {
    country = await Country.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!country) {
    return res.status(422).json({ message: "Country doesn't exist" });
  }

  try {
    await Country.update(
      {
        name,
        code,
        population,
      },
      {
        where: { id },
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(201).json({ message: "Country updated successfully" });
};

const deleteCountry = async (req, res, next) => {
  const { id } = req.params;

  let country;
  try {
    country = await Country.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!country) {
    return res.status(422).json({ message: "Country doesn't exist" });
  }

  try {
    await Country.destroy({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not delete country" });
  }

  res.status(200).json({ message: "Country deleted successfully" });
};

const getCountryById = async (req, res, next) => {
  const { id } = req.params;

  let country;
  try {
    country = await Country.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  // there is a no user with this id
  if (!country) {
    return res.status(422).json({ message: "Country doesn't exist" });
  }

  res.status(200).json({ country });
};

const getAllCountries = async (req, res, next) => {
  let countries;
  try {
    countries = await Country.findAll({
      order: [["id", "DESC"]],
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not fetch all countries" });
  }

  res.status(200).json({ countries });
};

module.exports = {
  createCountry,
  editCountry,
  deleteCountry,
  getCountryById,
  getAllCountries,
};
