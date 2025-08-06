const notificationEntity = require('./notification.entity');

/**
 * Mapper for converting between different notification data representations
 */
class NotificationMapper {

    static toEntity(raw) {
        return notificationEntity({
            ...raw,
            _id: raw._id?.toString()
        });
    }


    /**
     * Converts domain entity to persistence format (MongoDB)
     * @param {Object} notification - Notification domain entity
     * @returns {Object} Data ready for MongoDB
     */
    static toPersistence(notification) {
        const persistence = { ...notification };

        // Remove MongoDB's _id if it's null to allow MongoDB to generate it
        if (persistence._id === null) {
            delete persistence._id;
        }

        return persistence;
    }

    /**
     * Converts raw database data to domain entity
     * @param {Object|null} rawData - Raw data from MongoDB
     * @returns {Object|null} Notification domain entity or null if input is falsy
     */
    static toDomain(rawData) {
        if (!rawData) return null;
        return NotificationMapper.toEntity(rawData);
    }

    /**
     * Converts domain entity to DTO for API responses
     * @param {Object} notification - Notification domain entity
     * @returns {Object} Safe notification data for API responses
     */
    static toDTO(notification) {
        if (!notification) return null;

        // Create a shallow copy and remove internal fields
        const { _id, user_id, ...dto } = notification;

        // Add id field (using _id) for the API response
        return {
            id: _id,
            ...dto
        };
    }
}

module.exports = NotificationMapper;