/**
 * Agent entity factory function
 * @param {Object} data - Raw agent data
 * @returns {Object} Normalized agent entity
 */
export const agentEntity = (data = {}) => ({
    user_id: data.user_id || null,
    agent_number: data.agent_number || '',
    created_by: data.created_by || null,
    center_id: data.center_id || null,
    team_id: data.team_id || null,
    sector: data.sector || null
});