const { createSchema, updateSchema } = require('./notification.schema');
const notificationEntity = require('./notification.entity');
const validateAndTransform = require('../utils/parseDTO');

/**
 * Validates and transforms notification creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed notification data
 * @throws {Error} If validation fails
 */
const createNotificationDto = (data) => {
    validateAndTransform(data, createSchema, notificationEntity);
};

/**
 * Validates and transforms notification update data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed notification data
 * @throws {Error} If validation fails
 */
const updateNotificationDto = (data) => {
    validateAndTransform(data, updateSchema, notificationEntity);
};

module.exports = { createNotificationDto, updateNotificationDto };