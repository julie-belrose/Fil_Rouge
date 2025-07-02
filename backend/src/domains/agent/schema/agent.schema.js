const Joi = require('joi');

module.exports = {
    /**
     * Schema for creating a new agent
     * @type {Joi.ObjectSchema}
     */
    createSchema: Joi.object({
        user_id: Joi.number().integer().positive().required()
            .description('ID of the associated user account'),
        agent_number: Joi.string().required()
            .description('Unique identifier for the agent'),
        created_by: Joi.number().integer().positive().required()
            .description('ID of the user who created this agent'),
        center_id: Joi.number().integer().positive().required()
            .description('ID of the treatment center the agent belongs to'),
        team_id: Joi.number().integer().positive().optional()
            .description('ID of the team the agent is part of (optional)'),
        sector: Joi.string().optional()
            .description('Sector or area of responsibility')
    }),

    /**
     * Schema for updating an agent
     * @type {Joi.ObjectSchema}
     */
    updateSchema: Joi.object({
        team_id: Joi.number().integer().positive().allow(null),
        sector: Joi.string().allow('', null)
    }).min(1) // At least one field required for update
};