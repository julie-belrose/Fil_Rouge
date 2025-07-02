const pool = require('../../../config/database');
const bcrypt = require('bcryptjs');
const adminEntity = require('../entity/admin.entity');
const AdminDataMapper = require('../mapper/admin.mapper');

class AdminRepository {
     /**
     * Create a new admin in the database
     * @param {Object} adminData - The data of the admin to create
     * @returns {Promise<Object>} The created admin with its ID
     */
    static async create(adminData) {
        try {
        // 1. Hash the password
             const hashedPassword = await bcrypt.hash(adminData.password, 10);

             // 2. Prepare the data with the hashed password
             const adminWithHashedPassword = {
                 ...adminData,
                 password: hashedPassword
             };

             // 3. Convert the data to database format
             const dbData = AdminDataMapper.convertToPersistenceFormat(adminWithHashedPassword);

             // 4. Execute the query
             const [result] = await pool.execute(
                'INSERT INTO admins SET ?',
                [dbData]
            );

             // 5. Retrieve and return the created admin
             return this.findById(result.insertId);
         } catch (error) {
             console.error('Error in AdminDataAccess.create:', error);
             throw new Error(`Failed to create admin: ${error.message}`);
         }
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