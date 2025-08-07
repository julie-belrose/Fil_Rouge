const { createSchema, updateSchema } = require('./report.schema');
const reportEntity = require('./report.entity');
const validateAndTransform = require('../../utils/parseDTO');


/**
 * Validates and transforms report creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed report data  
 * @throws {Error} If validation fails
 */
const createReportDto = (data) => {
    return validateAndTransform(data, createSchema, reportEntity);
};

/**
 * Validates and transforms report update data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed report data
 * @throws {Error} If validation fails
 */
const updateReportDto = (data) => {
    return validateAndTransform(data, updateSchema, reportEntity);
};

const deleteReportDto = (data) => {
    //todo
};



module.exports = { createReportDto, updateReportDto, deleteReportDto };