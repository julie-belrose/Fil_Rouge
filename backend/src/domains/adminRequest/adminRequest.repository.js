import { getPool } from '#database/mysql/mysqlConnection.js';
import { adminRequestMapper } from '#domains/adminRequest/adminRequest.mapper.js';
import * as utilsMapper from '#utils/mapper.utils.js';

class AdminRequestRepository {
    /**
     * Creates a new adminRequest in the database
     * @param {Object} admin_requestData - Admin request data to create
     * @returns {Promise<Object>} Created adminRequest
     */
    async create(admin_requestData) {
        const data = adminRequestMapper.toPersistence(admin_requestData);
        const [result] = await getPool().execute(
            `INSERT INTO admin_requests (
                hashed_token, related_user_id, status, created_at, expires_at
            ) VALUES (?, ?, ?, ?, ?)`,
            [data.hashed_token, data.related_user_id, data.status, data.created_at, data.expires_at]
        );
        return this.findById(result.insertId);
    }

    /**
     * Finds an admin request by ID
     * @param {number} id - Admin request ID
     * @returns {Promise<Object|null>} Found admin request or null if not found
     */
    async findById(id) {
        const [rows] = await getPool().execute(
            'SELECT * FROM admin_requests WHERE id = ?',
            [id]
        );

        const result = rows[0];
        return result ? utilsMapper.toDTO(result) : null;
    }
}

export const adminRequestRepository = new AdminRequestRepository();