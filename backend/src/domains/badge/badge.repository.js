import { getPool } from '#database/mysql/mysqlConnection.js';
import { badgeMapper } from '#domains/badge/badge.mapper.js';
import * as utilsMapper from '#utils/mapper.utils.js';

class BadgeRepository {
    /**
     * Creates a new badge in the database
     * @param {Object} badgeData - Badge data to create
     * @returns {Promise<Object>} Created badge
     */
    async create(badgeData) {
        const [result] = await getPool().execute(
            'INSERT INTO badges SET ?',
            [badgeMapper.toPersistence(badgeData)]
        );
        return this.findById(result.insertId);
    }

    /**
     * Finds a badge by ID
     * @param {number} id - Badge ID
     * @returns {Promise<Object|null>} Found badge or null if not found
     */
    async findById(id) {
        const [rows] = await getPool().execute(
            'SELECT * FROM badges WHERE id = ?',
            [id]
        );

        const result = rows[0];
        return result ? utilsMapper.toDTO(result) : null;
    }
}

export const badgeRepository = new BadgeRepository();