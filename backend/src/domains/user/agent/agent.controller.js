const { createAgentDto, updateAgentDto, deleteAgentDto } = require('./agent.dto');
const agentService = require('./agent.service');
const agentEntity = require('./agent.entity');
const handlerBody = require('../utils/handlerBody');
const handlerRequest = require('../utils/handlerRequest');

// Get all agents
const getAgents = handlerBody(async (req, res) => {
    return await agentService.getAgents();
});

// Get single agent
const getAgent = handlerBody(async (req, res) => {
    return await agentService.getAgent(req.params.id);
}); 

/**
 * Create a new agent
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const createAgent = handlerRequest(createAgentDto, agentEntity, async (agent) => {
    const newAgent = await agentService.createAgent(agent);
    return newAgent;
});

// Update agent
const updateAgent = handlerRequest(updateAgentDto, agentEntity, async (agent) => {
    const updatedAgent = await agentService.updateAgent(agent);
    return updatedAgent;
});

// Delete agent
const deleteAgent = handlerRequest(deleteAgentDto, agentEntity, async (agent) => {
    const deletedAgent = await agentService.deleteAgent(agent);
    return deletedAgent;
});

module.exports = {
    getAgents,
    getAgent,
    createAgent,
    updateAgent,
    deleteAgent
};