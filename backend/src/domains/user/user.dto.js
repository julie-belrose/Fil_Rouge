const { createSchema, updateSchema } = require('./user.schema');
const userEntity = require('./user.entity');
const validateAndTransform = require('../utils/parseDTO');  

/**
 * Validates and transforms user creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed user data
 * @throws {Error} If validation fails
 */
const createUserDto = (data) => {
    return validateAndTransform(data, createSchema, userEntity);
};

const updateUserDto = (data) => {
    return validateAndTransform(data, updateSchema, userEntity);
};

const deleteUserDto = (data) => {
    //todo
};

module.exports = { createUserDto, updateUserDto, deleteUserDto };