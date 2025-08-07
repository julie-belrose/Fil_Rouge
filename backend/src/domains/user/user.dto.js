import { createSchema, updateSchema } from './user.schema.js';
import { userEntity } from './user.entity.js';
import { validateAndTransform } from '../../utils/parseDTO.js';

/**
 * Validates and transforms user creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed user data
 * @throws {Error} If validation fails
 */
export const createUserDTO = (data) => {
    return validateAndTransform(data, createSchema, userEntity);
};

export const updateUserDTO = (data) => {
    return validateAndTransform(data, updateSchema, userEntity);
};

export const deleteUserDTO = (data) => {
    //todo
};

export const getUserDTO = (data) => {
    //todo
};