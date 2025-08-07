import * as agentDto from '@domains/user/agent/agent.dto.js';
import { agentService } from '@domains/user/agent/agent.service.js';
import { agentEntity } from '@domains/user/agent/agent.entity.js';
import { handlerBody } from '@utils/handlerBody.js';
import handlerRequest from '@utils/handlerRequest.js';

// Get all agents
export const getAgents = handlerBody(async (req, res) => {
    return await agentService.getAgents();
});

// Get single agent
export const getAgent = handlerBody(async (req, res) => {
    return await agentService.getAgentByUserId(req.params.id);
}); 

/**
 * Create a new agent
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const createAgent = handlerRequest(agentDto.createAgentDTO, agentEntity, async (agent) => {
    const newAgent = await agentService.createAgent(agent);
    return newAgent;
});

// Update agent
export const updateAgent = handlerRequest(agentDto.updateAgentDTO, agentEntity, async (agent) => {
    const updatedAgent = await agentService.updateAgent(agent);
    return updatedAgent;
});

// Delete agent
export const deleteAgent = handlerRequest(agentDto.deleteAgentDTO, agentEntity, async (agent) => {
    const deletedAgent = await agentService.deleteAgent(agent);
    return deletedAgent;
});