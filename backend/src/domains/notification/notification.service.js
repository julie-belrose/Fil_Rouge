const notificationRepository = require('./repository/notification.repository');
const NotificationMapper = require('./mapper/notification.mapper');

class NotificationService {
    /**
    * Creates a new notification in the system
    * @param {Object} notificationData - The notification data to create
    * @param {string} notificationData.user_id - ID of the user creating the notification
    * @param {string} notificationData.title - Title of the notification
    * @param {string} notificationData.content - Content of the notification
    * @param {string} [notificationData.target_type='report'] - Type of the target
    * @param {string} [notificationData.target_id='report'] - ID of the target
    * @param {boolean} notificationData.read - Whether the notification has been read
    * @returns {Promise<Object>} The created notification DTO
    * @throws {Error} If notification creation fails
    */
    async createNotification(notificationData) {
        try {
            const newNotification = await notificationRepository.create(notificationData);
            return NotificationMapper.toDTO(newNotification);
        } catch (error) {
            console.error('Failed to create notification:', error);
            throw new Error(`Failed to create notification: ${error.message}`);
        }
    }

    async getNotificationById(id) {
        //todo
    }

    async updateNotification(id, notificationData) {
        //todo
    }

    async deleteNotification(id) {
        //todo
    }
}

module.exports = new NotificationService();