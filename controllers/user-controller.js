const User = require("../models/user");
const generateToken = require("../utils/generate-token");
const hashPassword = require("../utils/hash-password");
const matchPassword = require("../utils/match-password");

const registerUser = async (req, res, next) => {
  const { name, lastname, username, email, password } = req.body;

  // check if email exists
  let emailExists;
  try {
    emailExists = await User.findOne({ where: { email } });
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
    await User.create({
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

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  let user;
  try {
    user = await User.findOne({
      where: { email },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!user) {
    return res.status(422).json({ message: "Invalid data" });
  }

  if (!(await matchPassword(password, user.password))) {
    return res.status(422).json({ message: "Invalid data" });
  }

  const token = generateToken({ id: user.id });

  res
    .status(200)
    .json({ message: "User logged in successfully", token: token });
};

const editUser = async (req, res, next) => {
  const { id } = req.params;
  const { name, lastname } = req.body;

  try {
    await User.update(
      {
        name,
        lastname,
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

  res.status(200).json({ message: "User edited successfully" });
};

const deleteUser = async (req, res, next) => {
  const { id } = req.body;

  let user;
  try {
    user = await User.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  // there is a no user with this id
  if (!user) {
    return res.status(422).json({ message: "User doesn't exist" });
  }

  try {
    await User.destroy({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not delete the user" });
  }

  res.status(200).json({ message: "User deleted successfully" });
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;

  let user;
  try {
    user = await User.findOne({
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
  if (!user) {
    return res.status(422).json({ message: "User doesn't exist" });
  }

  res.status(200).json({ user: user });
};

const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not fetch all users" });
  }

  res.status(200).json({ users: users });
};

module.exports = {
  registerUser,
  loginUser,
  editUser,
  deleteUser,
  getUserById,
  getAllUsers,
};
