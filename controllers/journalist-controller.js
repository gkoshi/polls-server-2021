const { Op } = require("sequelize");

const Journalist = require("../models/journalist");
const generateToken = require("../utils/generate-token");
const hashPassword = require("../utils/hash-password");
const matchPassword = require("../utils/match-password");

const registerJournalist = async (req, res, next) => {
  const {
    name,
    lastname,
    username,
    email,
    password,
    phone,
    country_id,
    city_id,
    gender,
    question_number,
    from,
    to,
  } = req.body;

  // check if email exists
  let emailExists;
  try {
    emailExists = await Journalist.findOne({ where: { email } });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  // there is a user with this email
  if (emailExists) {
    return res.status(422).json({ message: "Email already exists" });
  }

  const hashedPassword = await hashPassword(password);

  // create user
  try {
    await Journalist.create({
      name,
      lastname,
      username,
      email,
      phone,
      country_id,
      city_id,
      gender,
      question_number,
      from,
      to,
      password: hashedPassword,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(200).json({ message: "User registered successfully" });
};

const loginJournalist = async (req, res, next) => {
  const { email, password } = req.body;

  let journalist;
  try {
    journalist = await Journalist.findOne({
      where: { email },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!journalist) {
    return res.status(422).json({ message: "Invalid data" });
  }

  if (!(await matchPassword(password, Journalist.password))) {
    return res.status(422).json({ message: "Invalid data" });
  }

  const token = generateToken({
    id: Journalist.id,
    name: Journalist.name,
    lastname: Journalist.lastname,
    email: Journalist.email,
  });

  res
    .status(200)
    .json({ message: "Journalist logged in successfully", token: token });
};

const editJournalist = async (req, res, next) => {
  const { id } = req.params;
  const { name, lastname, email, username } = req.body;

  // check if email exists
  let emailExists;
  try {
    emailExists = await Journalist.findOne({
      where: { email, id: { [Op.ne]: id } },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  // there is a user with this email
  if (emailExists) {
    return res.status(422).json({ message: "Email already exists" });
  }

  try {
    await Journalist.update(
      {
        name,
        lastname,
        email,
        username,
      },
      {
        where: {
          id,
        },
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(200).json({ message: "Journalist edited successfully" });
};

const deleteJournalist = async (req, res, next) => {
  const { id } = req.params;

  let journalist;
  try {
    journalist = await Journalist.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  // there is a no user with this id
  if (!journalist) {
    return res.status(422).json({ message: "Admin doesn't exist" });
  }

  try {
    await Journalist.destroy({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not delete the user" });
  }

  res.status(200).json({ message: "Jurnalist deleted successfully" });
};

const getJournalistById = async (req, res, next) => {
  const { id } = req.params;

  let journalist;
  try {
    journalist = await Journalist.findOne({
      attributes: {
        exclude: ["password"],
      },
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  // there is a no user with this id
  if (!journalist) {
    return res.status(422).json({ message: "User doesn't exist" });
  }

  res.status(200).json({ journalist: journalist });
};

const getAllJournalists = async (req, res, next) => {
  let journalists;
  try {
    journalists = await Journalist.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not fetch all admins" });
  }

  res.status(200).json({ journalists: journalists });
};

module.exports = {
  registerJournalist,
  loginJournalist,
  editJournalist,
  deleteJournalist,
  getJournalistById,
  getAllJournalists,
};
