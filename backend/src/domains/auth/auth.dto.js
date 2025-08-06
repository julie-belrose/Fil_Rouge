const { loginSchema, registerSchema } = require('./auth.schema');

/**
 * Validates and transforms login data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed login data
 * @throws {Error} If validation fails
 */
const loginDto = (data) => {
    const { error, value } = loginSchema.validate(data, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join('; ');
        throw new Error(`Validation error: ${errorMessage}`);
    }

    return authEntity(value);
};



/**
 * Validates and transforms register data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed register data
 * @throws {Error} If validation fails
 */
const registerDto = (data) => {
    const { error, value } = registerSchema.validate(data, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join('; ');
        throw new Error(`Validation error: ${errorMessage}`);
    }

    return authEntity(value);
};


/**
 * Validates and transforms logout data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed logout data
 * @throws {Error} If validation fails
 */
const logoutDto = (data) => {
    const { error, value } = logoutSchema.validate(data, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join('; ');
        throw new Error(`Validation error: ${errorMessage}`);
    }

    return authEntity(value);
};

module.exports = { loginDto, registerDto };