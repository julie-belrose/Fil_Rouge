const agentRepository = require('./repository/agent.repository');
const AgentMapper = require('./mapper/agent.mapper');

class AgentService {
    /**
     * Creates a new agent
     * @param {Object} agentData - Agent data
     * @returns {Promise<Object>} Created agent
     */
    async createAgent(agentData) {
        try {
            // Check if agent already exists for this user
            const existingAgent = await agentRepository.findByUserId(agentData.user_id);
            if (existingAgent) {
                throw new Error('An agent already exists for this user');
            }

            const newAgent = await agentRepository.create(agentData);
            return AgentMapper.toDTO(newAgent);
        } catch (error) {
            console.error('Failed to create agent:', error);
            throw new Error(`Failed to create agent: ${error.message}`);
        }
    }

    /**
     * Gets an agent by user ID
     * @param {number} userId - User ID
     * @returns {Promise<Object>} Agent data
     */
    async getAgentByUserId(userId) {
        try {
            const agent = await agentRepository.findByUserId(userId);
            if (!agent) {
                throw new Error('Agent not found');
            }
            return AgentMapper.toDTO(agent);
        } catch (error) {
            console.error(`Failed to get agent ${userId}:`, error);
            throw new Error(`Failed to get agent: ${error.message}`);
        }
    }

    async updateAgent(agentData) {
        //todo
    }

    async deleteAgent(agentData) {
        //todo
    }

    async getAgents() {
        //todo
    }
}

module.exports = new AgentService();