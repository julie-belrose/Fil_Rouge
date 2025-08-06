const { ObjectId } = require('mongodb');
const NotificationMapper = require('./notification.mapper');
const utilsMapper = require('../utils/mapperUtils');
const utilsRepository = require('../utils/repositoryUtils').default;
const mongoUtils = require('../utils/mongoUtils');

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
        const baseData = NotificationMapper.toPersistence(notificationData);
        const dataWithTimestamps = utilsRepository.setTimestamps(baseData);

        const result = await collection.insertOne(dataWithTimestamps);
        return this.findById(result.insertedId);
    }

    /**
     * Finds a notification by ID
     * @param {string} id - Notification ID
     * @returns {Promise<Object|null>} Found notification or null if not found
     */
    async findById(id) {
        try {
            const collection = await this.getCollection();
            const objectId = new ObjectId(id);
            const notification = await collection.findOne({ _id: objectId });
            return notification ? utilsMapper.toDTO(notification) : null;
        } catch (err) {
            console.error(`Invalid ObjectId or error finding notification: ${id}`, err);
            return null;
        }
    }

    /**
     * Deletes a notification by ID
     * @param {string} id - Notification ID
     * @returns {Promise<boolean>} True if deleted, false if not found
     */
    async delete(id) {
        try {
            const collection = await this.getCollection();
            const objectId = new ObjectId(id);
            const result = await collection.deleteOne({ _id: objectId });
            return result.deletedCount > 0;
        } catch (err) {
            console.error(`Error deleting notification: ${id}`, err);
            return false;
        }
    }
}

module.exports = new NotificationRepository();
