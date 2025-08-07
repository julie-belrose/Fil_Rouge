const { loginSchema, registerSchema, logoutSchema } = require('./auth.schema');
const authEntity = require('./auth.entity');
const validateAndTransform = require('../../utils/parseDTO');

/**
 * Validates and transforms login data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed login data
 * @throws {Error} If validation fails
 */
const loginDto = (data) => {
    return validateAndTransform(data, loginSchema, authEntity);
};



/**
 * Validates and transforms register data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed register data
 * @throws {Error} If validation fails
 */
const registerDto = (data) => {
    return validateAndTransform(data, registerSchema, authEntity);
};


/**
 * Validates and transforms logout data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed logout data
 * @throws {Error} If validation fails
 */
const logoutDto = (data) => {
    return validateAndTransform(data, logoutSchema, authEntity);
};

module.exports = { loginDto, registerDto, logoutDto };