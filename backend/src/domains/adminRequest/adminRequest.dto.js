const { createSchema, updateSchema } = require('./adminRequest.schema');
const admin_requestEntity = require('./adminRequest.entity');

/**
 * Validates and transforms adminRequest creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed adminRequest data
 * @throws {Error} If validation fails
 */
const createAdminRequestDto = (data) => {
    const { error, value } = createSchema.validate(data, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join('; ');
        throw new Error(`Validation error: ${errorMessage}`);
    }

    return admin_requestEntity(value);
};

/**
 * Validates and transforms adminRequest update data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed adminRequest data
 * @throws {Error} If validation fails
 */
const updateAdminRequestDto = (data) => {
    const { error, value } = updateSchema.validate(data, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join('; ');
        throw new Error(`Validation error: ${errorMessage}`);
    }

    return admin_requestEntity(value);
};

module.exports = { createAdminRequestDto, updateAdminRequestDto };