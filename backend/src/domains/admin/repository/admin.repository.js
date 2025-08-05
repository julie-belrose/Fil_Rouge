const db = require('../../../config/database');
const AdminMapper = require('./mapper/admin.mapper');

class AdminRepository {
    constructor() {
        this.tableName = 'admins';
    }

    /**
     * Creates a new admin
     * @param {Object} adminData - Admin data
     * @returns {Promise<Object>} Created admin
     */
    async create(adminData) {
        try {
            const [id] = await db(this.tableName)
                .insert(AdminMapper.toPersistence(adminData))
                .returning('user_id');
            
            return this.findByUserId(adminData.user_id);
        } catch (error) {
            console.error('Error creating admin:', error);
            throw error;
        }
    }


    /**
     * Finds admins by center ID
     * @param {number} centerId - Center ID
     * @returns {Promise<Array>} List of admins
     */
    async findByCenterId(centerId) {
        try {
            const admins = await db(this.tableName)
                .where('center_id', centerId);
                
            return admins.map(AdminMapper.toDomain);
        } catch (error) {
            console.error(`Error finding admins for center ${centerId}:`, error);
            throw error;
        }
    }
}

module.exports = new AdminRepository();