const { createSchema, updateSchema } = require('../schema/report.schema');
const reportEntity = require('../entity/report.entity');

/**
 * Validates and transforms report creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed report data
 * @throws {Error} If validation fails
 */
const createReportDto = (data) => {
    const { error, value } = createSchema.validate(data, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join('; ');
        throw new Error(`Validation error: ${errorMessage}`);
    }

    return reportEntity(value);
};

/**
 * Validates and transforms report update data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed report data
 * @throws {Error} If validation fails
 */
const updateReportDto = (data) => {
    const { error, value } = updateSchema.validate(data, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join('; ');
        throw new Error(`Validation error: ${errorMessage}`);
    }

    // Only return the fields that were actually provided
    const updateData = {};
    Object.keys(value).forEach(key => {
        if (value[key] !== undefined) {
            updateData[key] = value[key];
        }
    });

    return updateData;
};

module.exports = { createReportDto, updateReportDto };