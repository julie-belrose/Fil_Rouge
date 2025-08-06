const { createSchema, updateSchema, deleteSchema } = require('./adminRequest.schema');
const admin_requestEntity = require('./adminRequest.entity');
const validateAndTransform = require('../utils/parseDTO');

/**
 * Validates and transforms adminRequest creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed adminRequest data
 * @throws {Error} If validation fails
 */
const createAdminRequestDto = (data) => {
    return validateAndTransform(data, createSchema, admin_requestEntity);
};

/**
 * Validates and transforms adminRequest update data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed adminRequest data
 * @throws {Error} If validation fails
 */
const updateAdminRequestDto = (data) => {
    return validateAndTransform(data, updateSchema, admin_requestEntity);
};

const deleteAdminRequestDto = (data) => {
    return validateAndTransform(data, deleteSchema, admin_requestEntity);
};

module.exports = { createAdminRequestDto, updateAdminRequestDto, deleteAdminRequestDto };