const Agents = require("../models/agents");

const createAgent = async (req, res, next) => {
  const { name, phone, code } = req.body;

  try {
    await Agents.create({
      name,
      phone,
      code,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(200).json({ message: "Agent created successfully" });
};

const editAgent = async (req, res, next) => {
  const { id } = req.params;
  const { name, phone, code } = req.body;

  let agent;
  try {
    agent = await Agents.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!agent) {
    return res.status(422).json({ message: "Agent doesn't exist" });
  }

  try {
    await Agents.update(
      {
        name,
        phone,
        code,
      },
      {
        where: { id },
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  res.status(201).json({ message: "Agent updated successfully" });
};

const deleteAgent = async (req, res, next) => {
  const { id } = req.params;

  let agent;
  try {
    agent = await Agents.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!agent) {
    return res.status(422).json({ message: "Agent doesn't exist" });
  }

  try {
    await Agents.destroy({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not delete agent" });
  }

  res.status(200).json({ message: "Agent deleted successfully" });
};

const getAgentById = async (req, res, next) => {
  const { id } = req.params;

  let agent;
  try {
    agent = await Agents.findOne({
      where: { id },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }
  id;
  // there is a no user with this id
  if (!agent) {
    return res.status(422).json({ message: "Agent doesn't exist" });
  }

  res.status(200).json({ agent });
};

const getAllAgents = async (req, res, next) => {
  let agents;
  try {
    agents = await Agents.findAll();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Could not fetch all agents" });
  }

  res.status(200).json({ agents });
};

module.exports = {
  createAgent,
  editAgent,
  deleteAgent,
  getAgentById,
  getAllAgents,
};
