const { createSchema, updateSchema } = require('./agent.schema');
const agentEntity = require('./agent.entity');
const validateAndTransform = require('../utils/parseDTO');

/**
 * Validates and transforms agent creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed agent data
 * @throws {Error} If validation fails
 */
const createAgentDto = (data) => {
    return validateAndTransform(data, createSchema, agentEntity);
};

/**
 * Validates and transforms agent update data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed agent data
 * @throws {Error} If validation fails
 */
const updateAgentDto = (data) => {
    return validateAndTransform(data, updateSchema, agentEntity);
};

const deleteAgentDto = (data) => {
//todo
};

module.exports = { createAgentDto, updateAgentDto, deleteAgentDto };