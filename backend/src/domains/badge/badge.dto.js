import { createSchema, updateSchema } from './badge.schema.js';
import { badgeEntity } from './badge.entity.js';
import { validateAndTransform } from '../../utils/parseDTO.js';

/**
 * Validates and transforms badge creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed badge data
 * @throws {Error} If validation fails
 */
export const createBadgeDTO = (data) => {
    return validateAndTransform(data, createSchema, badgeEntity);
};

/**
 * Validates and transforms badge update data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed badge data
 * @throws {Error} If validation fails
 */
export const updateBadgeDTO = (data) => {
    return validateAndTransform(data, updateSchema, badgeEntity);
};

export const deleteBadgeDTO = (data) => {
    // TODO: Implement deleteBadgeDto
};