import { createSchema, updateSchema } from '#domains/user/agent/agent.schema.js';
import { agentEntity } from '#domains/user/agent/agent.entity.js';
import { validateAndTransform } from '#utils/parseDTO.js';

/**
 * Validates and transforms agent creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed agent data
 * @throws {Error} If validation fails
 */
export const createAgentDTO = (data) => {
    return validateAndTransform(data, createSchema, agentEntity);
};

/**
 * Validates and transforms agent update data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed agent data
 * @throws {Error} If validation fails
 */
export const updateAgentDTO = (data) => {
    return validateAndTransform(data, updateSchema, agentEntity);
};

export const deleteAgentDTO = (data) => {
    //todo
};