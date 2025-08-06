const pool = require('../../config/database');
const AgentMapper = require('./badge.mapper');

class AgentRepository {
    /**
     * Creates a new agent in the database
     * @param {Object} agentData - Agent data to create
     * @returns {Promise<Object>} Created agent
     */
    async create(agentData) {
        const [result] = await pool.execute(
            'INSERT INTO agents SET ?',
            [AgentMapper.toPersistence(agentData)]
        );
        return this.findByUserId(agentData.user_id);
    }

    /**
     * Finds an agent by user ID
     * @param {number} userId - User ID
     * @returns {Promise<Object|null>} Found agent or null if not found
     */
    async findByUserId(userId) {
        const [rows] = await pool.execute(
            'SELECT * FROM agents WHERE user_id = ?',
            [userId]
        );
        return AgentMapper.toDomain(rows[0]);
    }
}

module.exports = new AgentRepository();