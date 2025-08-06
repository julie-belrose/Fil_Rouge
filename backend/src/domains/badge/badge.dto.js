const { createSchema, updateSchema } = require('./badge.schema');
const badgeEntity = require('./badge.entity');

/**
 * Validates and transforms badge creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed badge data
 * @throws {Error} If validation fails
 */
const createBadgeDto = (data) => {
    return validateAndTransform(data, createSchema, badgeEntity);
};

/**
 * Validates and transforms badge update data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed badge data
 * @throws {Error} If validation fails
 */
const updateBadgeDto = (data) => {
    return validateAndTransform(data, updateSchema, badgeEntity);
};

const deleteBadgeDto = (data) => {
    // TODO: Implement deleteBadgeDto
}


module.exports = { createBadgeDto, updateBadgeDto, deleteBadgeDto };