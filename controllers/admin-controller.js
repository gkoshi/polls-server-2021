const { Op } = require("sequelize");

const Admin = require("../models/admin");
const generateToken = require("../utils/generate-token");
const hashPassword = require("../utils/hash-password");
const matchPassword = require("../utils/match-password");

const registerAdmin = async (req, res, next) => {
  const { name, lastname, username, email, password } = req.body;

  // check if email exists
  let emailExists;
  try {
    emailExists = await Admin.findOne({ where: { email } });
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
    await Admin.create({
      name,
      lastname,
      username,
      email,
      password: hashedPassword,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(200).json({ message: "User registered successfully" });
};

const loginAdmin = async (req, res, next) => {
  const { email, password } = req.body;

  let admin;
  try {
    admin = await Admin.findOne({
      where: { email },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!admin) {
    return res.status(422).json({ message: "Invalid data" });
  }

  if (!(await matchPassword(password, admin.password))) {
    return res.status(422).json({ message: "Invalid data" });
  }

  const token = generateToken({
    id: admin.id,
    name: admin.name,
    lastname: admin.lastname,
    email: admin.email,
  });

  res
    .status(200)
    .json({ message: "Adnmin logged in successfully", token: token });
};

const editAdmin = async (req, res, next) => {
  const { id } = req.params;
  const { name, lastname, email, username } = req.body;

  // check if email exists
  let emailExists;
  try {
    emailExists = await Admin.findOne({
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
    await Admin.update(
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

  res.status(200).json({ message: "Admin edited successfully" });
};

const deleteAdmin = async (req, res, next) => {
  const { id } = req.params;

  let admin;
  try {
    admin = await Admin.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  // there is a no user with this id
  if (!admin) {
    return res.status(422).json({ message: "Admin doesn't exist" });
  }

  try {
    await Admin.destroy({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not delete the user" });
  }

  res.status(200).json({ message: "Admin deleted successfully" });
};

const getAdminById = async (req, res, next) => {
  const { id } = req.params;

  let admin;
  try {
    admin = await Admin.findOne({
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
  if (!admin) {
    return res.status(422).json({ message: "User doesn't exist" });
  }

  res.status(200).json({ admin: admin });
};

const getAllAdmins = async (req, res, next) => {
  let admins;
  try {
    admins = await Admin.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not fetch all admins" });
  }

  res.status(200).json({ admins: admins });
};

module.exports = {
  registerAdmin,
  loginAdmin,
  editAdmin,
  deleteAdmin,
  getAdminById,
  getAllAdmins,
};
