const { createSchema, updateSchema } = require('../schema/badge.schema');
const badgeEntity = require('../entity/badge.entity');

/**
 * Validates and transforms badge creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed badge data
 * @throws {Error} If validation fails
 */
const createBadgeDto = (data) => {
    const { error, value } = createSchema.validate(data, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join('; ');
        throw new Error(`Validation error: ${errorMessage}`);
    }

    return badgeEntity(value);
};

/**
 * Validates and transforms badge update data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed badge data
 * @throws {Error} If validation fails
 */
const updateBadgeDto = (data) => {
    const { error, value } = updateSchema.validate(data, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join('; ');
        throw new Error(`Validation error: ${errorMessage}`);
    }

    return badgeEntity(value);
};

module.exports = { createBadgeDto, updateBadgeDto };