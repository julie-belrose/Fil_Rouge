import { createSchema, updateSchema } from './notification.schema.js';
import { notificationEntity } from './notification.entity.js';
import { validateAndTransform } from '../../utils/parseDTO.js';

/**
 * Validates and transforms notification creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed notification data
 * @throws {Error} If validation fails
 */
export const createNotificationDTO = (data) => {
    validateAndTransform(data, createSchema, notificationEntity);
};

/**
 * Validates and transforms notification update data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed notification data
 * @throws {Error} If validation fails
 */
export const updateNotificationDTO = (data) => {
    validateAndTransform(data, updateSchema, notificationEntity);
};

/**
 * Validates and transforms notification deletion data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed notification data
 * @throws {Error} If validation fails
 */
export const deleteNotificationDTO = (data) => {
    validateAndTransform(data, deleteSchema, notificationEntity);
};