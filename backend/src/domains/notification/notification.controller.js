import * as notificationDto from '@domains/notification/notification.dto.js';
import { notificationEntity } from '@domains/notification/notification.entity.js';
import { notificationService } from '@domains/notification/notification.service.js';
import handlerRequest from '@utils/handlerRequest.js';
import { handlerBody } from '@utils/handlerBody.js';

// Get all notifications
export const getNotifications = handlerBody(async (req, res) => {
    return await notificationService.getNotifications();
});

// Get single notification
export const getNotification = handlerBody(async (req, res) => {
    const notification = await notificationService.getNotificationById(req.params.id);
    return notification;
});

/**
 * Create a new notification
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const createNotification = handlerRequest(notificationDto.createNotificationDTO, notificationEntity, async (notification) => {
    const newNotification = await notificationService.createNotification(notification);
    return newNotification;
});

// Update notification
export const updateNotification = handlerRequest(notificationDto.updateNotificationDTO, notificationEntity, async (notification) => {
    const updatedNotification = await notificationService.updateNotification(notification);
    return updatedNotification;
});

// Delete notification
export const deleteNotification = handlerRequest(notificationDto.deleteNotificationDTO, notificationEntity, async (notification) => {
    const deletedNotification = await notificationService.deleteNotification(notification.id);
    return deletedNotification;
});