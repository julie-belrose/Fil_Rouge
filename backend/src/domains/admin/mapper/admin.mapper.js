const adminEntity = require('../entity/admin.entity');

/**
 * Mapper for the conversion between different layers of the application
 * Manages the transformation of data between database format and business format
 */
class AdminMapper {
    /**
     * Converts domain entity to persistence format
     * @param {Object} admin - Admin domain entity
     * @returns {Object} Persistence format
     */
    static toPersistence(admin) {
        return {
            user_id: admin.user_id,
            center_id: admin.center_id,
            created_at: admin.created_at,
            updated_at: admin.updated_at
        };
    }

    /**
     * Converts raw data to domain entity
     * @param {Object} rawData - Raw data from database
     * @returns {Object} Admin domain entity
     */
    static toDomain(rawData) {
        if (!rawData) return null;
        return adminEntity(rawData);
    }

    /**
     * Converts domain entity to DTO
     * @param {Object} admin - Admin domain entity
     * @returns {Object} DTO
     */
    static toDTO(admin) {
        if (!admin) return null;

        return {
            user_id: admin.user_id,
            center_id: admin.center_id,
            created_at: admin.created_at,
            updated_at: admin.updated_at
        };
    }
}

module.exports = AdminMapper;

module.exports = AdminDataMapper;