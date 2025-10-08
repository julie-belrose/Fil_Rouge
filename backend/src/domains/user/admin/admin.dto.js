import { createAdminSchema } from '#domains/user/admin/admin.schema.js';
import { adminEntity } from '#domains/user/admin/admin.entity.js';
import { validateAndTransform } from '#utils/parseDTO.js';

/**
 * Validates and transforms admin creation data
 * @param {Object} data - Admin creation data
 * @returns {Object} Validated and transformed admin data
 * @throws {Error} If validation fails
 */
export const createAdminDTO = (data) => {
    return validateAndTransform(data, createAdminSchema, adminEntity);
};

export const updateAdminDTO = (data) => {
    //todo
};

export const deleteAdminDTO = (data) => {
//todo
};