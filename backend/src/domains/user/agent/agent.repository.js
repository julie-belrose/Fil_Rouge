import { toDTO } from '@utils/mapper.utils.js';
import { agentMapper } from './agent.mapper.js';
import { createWithTimestampsSQL, findById } from '@utils/mysql.utils.js';


class AgentRepository {
    /**
     * Creates a new agent in the database
     * @param {Object} agentData - Agent data to create
     * @returns {Promise<Object>} Created agent
     */
    async create(agentData) {
        return await createWithTimestampsSQL('agents', agentMapper.toPersistence(agentData), agentMapper.toDomain);
    }

    /**
     * Finds an agent by user ID
     * @param {number} userId - User ID
     * @returns {Promise<Object|null>} Found agent or null if not found
     */
    async findByUserId(userId) {
        return await findById('agents', userId, {}, utilsMapper.toDTO);
    }
}

export const agentRepository = new AgentRepository();