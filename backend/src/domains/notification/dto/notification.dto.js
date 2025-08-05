const { createSchema, updateSchema } = require('../schema/notification.schema');
const notificationEntity = require('../entity/notification.entity');

/**
 * Validates and transforms notification creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed notification data
 * @throws {Error} If validation fails
 */
const createNotificationDto = (data) => {
    const { error, value } = createSchema.validate(data, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join('; ');
        throw new Error(`Validation error: ${errorMessage}`);
    }

    return notificationEntity(value);
};

/**
 * Validates and transforms notification update data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed notification data
 * @throws {Error} If validation fails
 */
const updateNotificationDto = (data) => {
    const { error, value } = updateSchema.validate(data, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join('; ');
        throw new Error(`Validation error: ${errorMessage}`);
    }

    return notificationEntity(value);
};

module.exports = { createNotificationDto, updateNotificationDto };