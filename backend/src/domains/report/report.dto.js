import { createSchema, updateSchema } from './report.schema.js';
import { reportEntity } from './report.entity.js';
import { validateAndTransform } from '../../utils/parseDTO.js';


/**
 * Validates and transforms report creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed report data  
 * @throws {Error} If validation fails
 */
export const createReportDTO = (data) => {
    return validateAndTransform(data, createSchema, reportEntity);
};

/**
 * Validates and transforms report update data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed report data
 * @throws {Error} If validation fails
 */
export const updateReportDTO = (data) => {
    return validateAndTransform(data, updateSchema, reportEntity);
};

export const deleteReportDTO = (data) => {
    //todo
};