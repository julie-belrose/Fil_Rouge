const userEntity = require('./user.entity');

/**
 * Mapper for converting between different user data representations
 */
class UserMapper {
    /**
     * Converts domain entity to persistence format
     * @param {Object} user - User domain entity
     * @returns {Object} Data ready for database storage
     */
    static toPersistence(user) {
        return {
            auth_id: user.auth_id,
            pseudo: user.pseudo,
            first_name: user.first_name,
            last_name: user.last_name,
            district: user.district,
            loyalty_points: user.loyalty_points
        };
    }

    /**
     * Converts raw database data to domain entity
     * @param {Object|null} rawData - Raw data from database
     * @returns {Object|null} User domain entity or null if input is falsy
     */
    static toDomain(rawData) {
        if (!rawData) return null;
        return userEntity(rawData);
    }

    /**
     * Converts domain entity to DTO for API responses
     * @param {Object} user - User domain entity
     * @returns {Object} Safe user data for API responses
     */
    static toDTO(user) {
        // Exclude internal fields from response
        const { auth_id, ...userData } = user;
        return userData;
    }
}

module.exports = UserMapper;