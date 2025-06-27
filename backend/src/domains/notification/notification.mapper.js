/**
 * Mapper for converting between different notification data representations
 */
class NotificationMapper {

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
}

export const notificationMapper = new NotificationMapper();