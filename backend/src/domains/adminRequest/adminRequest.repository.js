const pool = require('../../config/database');
const Admin_requestMapper = require('./adminRequest.mapper');

class AdminRequestRepository {
    /**
     * Creates a new adminRequest in the database
     * @param {Object} admin_requestData - adminRequest data to create
     * @returns {Promise<Object>} Created adminRequest
     */
    async create(admin_requestData) {
        const data = Admin_requestMapper.toPersistence(admin_requestData);
        const [result] = await pool.execute(
            `INSERT INTO admin_requests (
                hashed_token, related_user_id, status, created_at, expires_at
            ) VALUES (?, ?, ?, ?, ?)`,
            [data.hashed_token, data.related_user_id, data.status, data.created_at, data.expires_at]
        );
        return this.findById(result.insertId);
    }

    /**
     * Finds an adminRequest by ID
     * @param {number} id - Admin_request ID
     * @returns {Promise<Object|null>} Found adminRequest or null if not found
     */
    async findById(id) {
        const [rows] = await pool.execute(
            'SELECT * FROM admin_requests WHERE id = ?',
            [id]
        );
        return rows.length ? Admin_requestMapper.toDomain(rows[0]) : null;
    }
}

module.exports = new AdminRequestRepository();