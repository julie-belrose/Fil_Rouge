const { getDb } = require('../../database/mongodb');
const NotificationMapper = require('../mapper/notification.mapper');

/**
 * Handles database operations for reports
 */
class NotificationRepository {
    constructor() {
        this.collectionName = 'notifications';
    }

    /**
     * Gets the MongoDB collection for reports
     * @returns {Promise<Collection>} MongoDB collection
     */
    async getCollection() {
        const db = await getDb();
        return db.collection(this.collectionName);
    }

    /**
     * Creates a new notification in the database
     * @param {Object} notificationData - Notification data to create
     * @returns {Promise<Object>} Created notification
     */
    async create(notificationData) {
        const collection = await this.getCollection();
        const now = new Date();
        
        const notification = {
            ...NotificationMapper.toPersistence(notificationData),
            created_at: now,
            updated_at: now
        };
        
        const result = await collection.insertOne(notification);
        return this.findById(result.insertedId);
    }

    /**
     * Finds a notification by ID
     * @param {string} id - Notification ID
     * @returns {Promise<Object|null>} Found notification or null if not found
     */
    async findById(id) {
        const collection = await this.getCollection();
        const notification = await collection.findOne({ _id: id });
        return NotificationMapper.toDomain(notification);
    }

    /**
     * Deletes a notification by ID
     * @param {string} id - Notification ID
     * @returns {Promise<boolean>} True if deleted, false if not found
     */
    async delete(id) {
        const collection = await this.getCollection();
        const result = await collection.deleteOne({ _id: id });
        return result.deletedCount > 0;
    }
}

module.exports = new NotificationRepository();