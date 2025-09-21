const Joi = require('joi');
const { createAdminSchema } = require('./admin.schema');
const adminEntity = require('./admin.entity');
const validateAndTransform = require('../utils/parseDTO');

/**
 * Validates and transforms admin creation data
 * @param {Object} data - Admin creation data
 * @returns {Object} Validated and transformed admin data
 * @throws {Error} If validation fails
 */
const createAdminDto = (data) => {
    return validateAndTransform(data, createSchema, adminEntity);
};

const updateAdminDto = (data) => {
    //todo
};

const deleteAdminDto = (data) => {
//todo
};

module.exports = {
    createAdminDto,
    updateAdminDto,
    deleteAdminDto
};