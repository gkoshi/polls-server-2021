const express = require('express');
const router = express.Router();

const { AGENT_ROUTE_PATHS } = require('./route-enums');
const {
  createAgent,
  editAgent,
  deleteAgent,
  getAgentById,
  getAllAgents,
} = require('../controllers/agents-controller');

const { validate } = require('../validators/validate');

router.post(AGENT_ROUTE_PATHS.CREATE_AGENT, validate, createAgent);

router.put(AGENT_ROUTE_PATHS.EDIT_AGENT, validate, editAgent);

router.delete(AGENT_ROUTE_PATHS.DELETE_AGENT, deleteAgent);

router.get(AGENT_ROUTE_PATHS.GET_AGENT_BY_ID, getAgentById);

router.get(AGENT_ROUTE_PATHS.GET_ALL_AGENTS, getAllAgents);

module.exports = router;
