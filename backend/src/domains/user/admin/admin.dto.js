const Joi = require('joi');
const { createAdminSchema } = require('./admin.schema');
const adminEntity = require('./admin.entity');

/**
 * Validates and transforms admin creation data
 * @param {Object} data - Admin creation data
 * @returns {Object} Validated and transformed admin data
 * @throws {Error} If validation fails
 */
const createAdminDto = (data) => {
    const { error, value } = createAdminSchema.validate(data, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join('; ');
        throw new Error(`Validation error: ${errorMessage}`);
    }

    return adminEntity(value);
};

module.exports = {
    createAdminDto
};