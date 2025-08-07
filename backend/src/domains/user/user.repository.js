import { getPool } from '@database/mysql/mysqlConnection.js';
import { userMapper } from '@domains/user/user.mapper.js';
import * as utilsMapper from '@utils/mapper.utils.js';

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
        const [result] = await getPool().execute(
            'INSERT INTO users SET ?',
            [userMapper.toPersistence(userData)]
        );
        return this.findById(result.insertId);
    }

    /**
     * Finds a user by ID
     * @param {number} id - User ID
     * @returns {Promise<Object|null>} Found user or null if not found
     */
    async findById(id) {
        const [rows] = await getPool().execute(
            'SELECT * FROM users WHERE id = ?',
            [id]
        );
        return utilsMapper.toDTO(rows[0]);
    }

    /**
     * Finds a user by auth ID
     * @param {number} authId - Auth ID
     * @returns {Promise<Object|null>} Found user or null if not found
     */
    async findByAuthId(authId) {
        const [rows] = await getPool().execute(
            'SELECT * FROM users WHERE auth_id = ?',
            [authId]
        );
        return utilsMapper.toDTO(rows[0]);
    }
}

export const userRepository = new UserRepository();