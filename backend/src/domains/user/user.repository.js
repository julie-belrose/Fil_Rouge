const pool = require('../../../../config/database');
const UserMapper = require('./user.mapper');

/**
 * Handles database operations for users
 */
class UserRepository {
    /**
     * Creates a new user in the database
     * @param {Object} userData - User data to create
     * @returns {Promise<Object>} Created user
     */
    async create(userData) {
        const [result] = await pool.execute(
            'INSERT INTO users SET ?',
            [UserMapper.toPersistence(userData)]
        );
        return this.findById(result.insertId);
    }

    /**
     * Finds a user by ID
     * @param {number} id - User ID
     * @returns {Promise<Object|null>} Found user or null if not found
     */
    async findById(id) {
        const [rows] = await pool.execute(
            'SELECT * FROM users WHERE id = ?',
            [id]
        );
        return UserMapper.toDomain(rows[0]);
    }

    /**
     * Finds a user by auth ID
     * @param {number} authId - Auth ID
     * @returns {Promise<Object|null>} Found user or null if not found
     */
    async findByAuthId(authId) {
        const [rows] = await pool.execute(
            'SELECT * FROM users WHERE auth_id = ?',
            [authId]
        );
        return UserMapper.toDomain(rows[0]);
    }
}

module.exports = new UserRepository();