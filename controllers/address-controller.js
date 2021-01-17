const Address = require("../models/address");

const createAddress = async (req, res, next) => {
  const { city_id, country_id, name } = req.body;

  try {
    await Address.create({
        city_id,
        country_id,
        name,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(200).json({ message: "Address created successfully" });
};

const editAddress = async (req, res, next) => {
  const { id } = req.params;
  const { city_id, country_id, name } = req.body;

  let address;
  try {
    address = await Address.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!address) {
    return res.status(422).json({ message: "Address doesn't exist" });
  }

  try {
    await Address.update(
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
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(201).json({ message: "Address updated successfully" });
};

const deleteAddress = async (req, res, next) => {
  const { id } = req.params;

  let address;
  try {
    address = await Address.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!address) {
    return res.status(422).json({ message: "Address doesn't exist" });
  }

  try {
    await Address.destroy({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not delete address" });
  }

  res.status(200).json({ message: "Address deleted successfully" });
};

const getAddressById = async (req, res, next) => {
  const { id } = req.params;

  let address;
  try {
    address = await Address.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }
  id;
  // there is a no user with this id
  if (!address) {
    return res.status(422).json({ message: "Address doesn't exist" });
  }

  res.status(200).json({ address });
};

const getAllAddresses = async (req, res, next) => {
  let addresses;
  try {
    addresses = await Address.findAll();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not fetch all addresses" });
  }

  res.status(200).json({ addresses });
};

module.exports = {
  createAddress,
  editAddress,
  deleteAddress,
  getAddressById,
  getAllAddresses,
};
