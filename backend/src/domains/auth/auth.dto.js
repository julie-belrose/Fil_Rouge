import { loginSchema, registerSchema, logoutSchema, updateSchema } from '#domains/auth/auth.schema.js';
import { authEntity } from '#domains/auth/auth.entity.js';
import { validateAndTransform } from '#utils/parseDTO.js';

/**
 * Validates and transforms login data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed login data
 * @throws {Error} If validation fails
 */
export const loginDTO = (data) => {
    return validateAndTransform(data, loginSchema, authEntity);
};

/**
 * Validates and transforms register data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed register data
 * @throws {Error} If validation fails
 */
export const registerDTO = (data) => {
    return validateAndTransform(data, registerSchema, authEntity);
};

/**
 * Validates and transforms logout data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed logout data
 * @throws {Error} If validation fails
 */
export const logoutDTO = (data) => {
    return validateAndTransform(data, logoutSchema, authEntity);
};

/**
 * Validates and transforms update data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed update data
 * @throws {Error} If validation fails
 */
export const updateDTO = (data) => {
    return validateAndTransform(data, updateSchema, authEntity);
};

