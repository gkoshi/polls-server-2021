const Country = require("../models/country");

const createCountry = async (req, res, next) => {
  const { name, population } = req.body;

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

  res.status(200).json({ message: "City created successfully" });
};

const editCountry = async (req, res, next) => {
  const { id } = req.params;
  const { name, code, population } = req.body;

  let city;
  try {
    city = await City.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!city) {
    return res.status(422).json({ message: "City doesn't exist" });
  }

  try {
    await Country.update(
      {
        name,
        country_id,
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

  res.status(201).json({ message: "City updated successfully" });
};

const deleteCountry = async (req, res, next) => {
  const { id } = req.params;

  let city;
  try {
    city = await Country.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!city) {
    return res.status(422).json({ message: "City doesn't exist" });
  }

  try {
    await Country.destroy({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not delete city" });
  }

  res.status(200).json({ message: "City deleted successfully" });
};

const getCountryById = async (req, res, next) => {
  const { id } = req.params;

  let city;
  try {
    city = await City.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  // there is a no user with this id
  if (!city) {
    return res.status(422).json({ message: "City doesn't exist" });
  }

  res.status(200).json({ city: city });
};

const getAllCountries = async (req, res, next) => {
  let cities;
  try {
    cities = await Country.findAll();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not fetch all cities" });
  }

  res.status(200).json({ cities: cities });
};

module.exports = {
  createCountry,
  editCountry,
  deleteCountry,
  getCountryById,
  getAllCountries,
};
