const pool = require('../../../config/database');
const bcrypt = require('bcryptjs');
const adminEntity = require('../entity/admin.entity');

class AdminModel {
    /**
     * Create a new admin
     */
    static async create(adminData) {
        const hashedPassword = await bcrypt.hash(adminData.password, 10);

        const [result] = await pool.execute(
            `INSERT INTO admins 
            (first_name, last_name, email, password, role, permissions) 
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                adminData.firstName,
                adminData.lastName,
                adminData.email,
                hashedPassword,
                adminData.role || 'admin',
                JSON.stringify(adminData.permissions || ['read', 'write', 'delete'])
            ]
        );

        return this.findById(result.insertId);
    }

    /**
     * Find an admin by its ID
     */
    static async findById(id) {
        const [rows] = await pool.execute(
            'SELECT * FROM admins WHERE id = ?',
            [id]
        );
        return rows[0] ? adminEntity(rows[0]) : null;
    }

    /**
     * Find an admin by its email
     */
    static async findByEmail(email) {
        const [rows] = await pool.execute(
            'SELECT * FROM admins WHERE email = ?',
            [email]
        );
        return rows[0] ? adminEntity(rows[0]) : null;
    }

    /**
     * Find all admins
     */
    static async findAll() {
        const [rows] = await pool.query('SELECT * FROM admins');
        return rows.map(adminEntity);
    }
}

module.exports = AdminModel;