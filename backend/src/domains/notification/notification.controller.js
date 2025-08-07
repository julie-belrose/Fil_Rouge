const { createNotificationDto } = require('./notification.dto');
const notificationEntity = require('./notification.entity');
const notificationService = require('./notification.service');
const handlerRequest = require('../../utils/handlerRequest');
const handlerBody = require('../../utils/handlerBody');

// Get all reports
const getNotifications = handlerBody(async (req, res) => {
    return await notificationService.getNotifications();
});

// Get single report
const getNotification = handlerBody(async (req, res) => {
    const notification = notificationService.getNotificationById(req.params.id);
    return notification;
});

/**
 * Create a new report
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const createNotification = handlerRequest(createNotificationDto, notificationEntity, async (notification) => {
    const newNotification = await notificationService.createNotification(notification);
    return newNotification;
});

// Update report
const updateNotification = handlerRequest(updateNotificationDto, notificationEntity, async (notification) => {
    const updatedNotification = notificationService.updateNotification(notification);
    return updatedNotification;
});

// Delete report
const deleteNotification = handlerRequest(deleteNotificationDto, notificationEntity, async (notification) => {
    const deletedNotification = notificationService.deleteNotification(notification);
    return deletedNotification;
});

module.exports = {
    getNotifications,
    getNotification,
    createNotification,
    updateNotification,
    deleteNotification
};