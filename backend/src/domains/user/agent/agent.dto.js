const { createSchema, updateSchema } = require('./agent.schema');
const agentEntity = require('./agent.entity');

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
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join('; ');
        throw new Error(`Validation error: ${errorMessage}`);
    }

    return agentEntity(value);
};

module.exports = { createAgentDto, updateAgentDto };