const utilsMapper = require('../../utils/mapperUtils');
const mongoUtils = require('../../utils/mongoUtils');

/**
 * Handles database operations for notifications
 */
class NotificationRepository {
    constructor() {
        this.collectionName = 'notifications';
    }

    /**
     * Gets the MongoDB collection for notifications
     * @returns {Promise<Collection>} MongoDB collection
     */
    async getCollection() {
        return await mongoUtils.getMongoCollection(this.collectionName);
    }

    /**
     * Creates a new notification in the database
     * @param {Object} notificationData - Notification data to create
     * @returns {Promise<Object>} Created notification
     */
    async create(notificationData) {
        const collection = await this.getCollection();
        return mongoUtils.createWithTimestamps(collection, notificationData, utilsMapper.toDTO);
    }

    /**
     * Finds a notification by ID
     * @param {string} id - Notification ID
     * @returns {Promise<Object|null>} Found notification or null if not found
     */
    async findById(id) {
        const collection = await this.getCollection();
        return mongoUtils.findById(collection, id, utilsMapper.toDTO);
    }

    /**
     * Deletes a notification by ID
     * @param {string} id - Notification ID
     * @returns {Promise<boolean>} True if deleted, false if not found
     */
    async delete(id) {
        const collection = await this.getCollection();
        return mongoUtils.deleteById(collection, id);
    }
}

module.exports = new NotificationRepository();
