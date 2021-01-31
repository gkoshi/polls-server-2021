const Settlement = require("../models/settlement");
const City = require("../models/city");
const Country = require("../models/country");

const createSettlement = async (req, res, next) => {
  const { city_id, country_id, name } = req.body;

  try {
    await Settlement.create({
      city_id,
      country_id,
      name,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(200).json({ message: "Settlement created successfully" });
};

const editSettlement = async (req, res, next) => {
  const { id } = req.params;
  const { city_id, country_id, name } = req.body;

  let settlement;
  try {
    settlement = await Settlement.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!settlement) {
    return res.status(422).json({ message: "Settlement doesn't exist" });
  }

  try {
    await Settlement.update(
      {
        city_id,
        country_id,
        name,
      },
      {
        where: { id },
      }
    );
  } catch (err) {
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(201).json({ message: "Settlement updated successfully" });
};

const deleteSettlement = async (req, res, next) => {
  const { id } = req.params;

  let settlement;
  try {
    settlement = await Settlement.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!settlement) {
    return res.status(422).json({ message: "Settlement doesn't exist" });
  }

  try {
    await Settlement.destroy({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not delete address" });
  }

  res.status(200).json({ message: "Settlement deleted successfully" });
};

const getSettlementById = async (req, res, next) => {
  const { id } = req.params;

  let settlement;
  try {
    settlement = await Settlement.findOne({
      include: [City, Country],
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }
  id;
  // there is a no user with this id
  if (!settlement) {
    return res.status(422).json({ message: "Settlement doesn't exist" });
  }

  res.status(200).json({ settlement });
};

const getSettlementByCityId = async (req, res, next) => {
  const { country_id, city_id } = req.params;

  let settlements;
  try {
    settlements = await Settlement.findAll({ where: { country_id, city_id } });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not fetch all addresses" });
  }

  res.status(200).json({ settlements });
};

const getAllSettlements = async (req, res, next) => {
  let settlements;
  try {
    settlements = await Settlement.findAll();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not fetch all addresses" });
  }

  res.status(200).json({ settlements });
};

module.exports = {
  createSettlement,
  editSettlement,
  deleteSettlement,
  getSettlementById,
  getSettlementByCityId,
  getAllSettlements,
};
