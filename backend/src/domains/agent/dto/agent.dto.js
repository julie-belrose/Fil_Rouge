const { createSchema, updateSchema } = require('../schema/agent.schema');
const agentEntity = require('../entity/agent.entity');

/**
 * Validates and transforms agent creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed agent data
 * @throws {Error} If validation fails
 */
const createAgentDto = (data) => {
    const { error, value } = createSchema.validate(data, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join('; ');
        throw new Error(`Validation error: ${errorMessage}`);
    }

    return agentEntity(value);
};

/**
 * Validates and transforms agent update data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed agent data
 * @throws {Error} If validation fails
 */
const updateAgentDto = (data) => {
    const { error, value } = updateSchema.validate(data, {
        abortEarly: false, // Joi collecte all errors of validation before sending them
        stripUnknown: true // Remove unknown fields from the schema
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

module.exports = { createAgentDto, updateAgentDto };