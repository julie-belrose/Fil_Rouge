import { createSchema, updateSchema, deleteSchema } from './adminRequest.schema.js';
import { adminRequestEntity } from './adminRequest.entity.js';
import { validateAndTransform } from '../../utils/parseDTO.js';

/**
 * Validates and transforms adminRequest creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed adminRequest data
 * @throws {Error} If validation fails
 */
export const createAdminRequestDTO = (data) => {
    return validateAndTransform(data, createSchema, adminRequestEntity);
};

/**
 * Validates and transforms adminRequest update data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed adminRequest data
 * @throws {Error} If validation fails
 */
export const updateAdminRequestDTO = (data) => {
    return validateAndTransform(data, updateSchema, adminRequestEntity);
};

export const deleteAdminRequestDTO = (data) => {
    return validateAndTransform(data, deleteSchema, adminRequestEntity);
};