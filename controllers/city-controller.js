const City = require("../models/city");

const createCity = async (req, res, next) => {
  const { name, country_id, population } = req.body;

  try {
    await City.create({
      name,
      country_id,
      population,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(200).json({ message: "City created successfully" });
};

const editCity = async (req, res, next) => {
  const { id } = req.params;
  const { name, country_id, population } = req.body;

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
    await City.update(
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

const deleteCity = async (req, res, next) => {
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

  if (!city) {
    return res.status(422).json({ message: "City doesn't exist" });
  }

  try {
    await City.destroy({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not delete city" });
  }

  res.status(200).json({ message: "City deleted successfully" });
};

const getCityById = async (req, res, next) => {
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
  id;
  // there is a no user with this id
  if (!city) {
    return res.status(422).json({ message: "City doesn't exist" });
  }

  res.status(200).json({ city: city });
};

const getAllCities = async (req, res, next) => {
  let cities;
  try {
    cities = await City.findAll();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not fetch all cities" });
  }

  res.status(200).json({ cities: cities });
};

module.exports = {
  createCity,
  editCity,
  deleteCity,
  getCityById,
  getAllCities,
};
