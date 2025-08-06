const Joi = require('joi');

const statusHistorySchema = Joi.object({
    status: Joi.string().required(),
    date: Joi.date().default(() => new Date(), 'current date'),
    updated_by: Joi.number().integer().positive().required()
});

const locationSchema = Joi.object({
    lat: Joi.number().min(-90).max(90).required(),
    lng: Joi.number().min(-180).max(180).required()
});

const assignedTeamSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().required(),
    center_id: Joi.number().integer().positive().required()
});

module.exports = {
    createSchema: Joi.object({
        user_id: Joi.number().integer().positive().required(),
        agent_id: Joi.number().integer().positive().optional(),
        assigned_by: Joi.number().integer().positive().optional(),
        assigned_team: assignedTeamSchema.optional(),
        status: Joi.string().required(),
        status_history: Joi.array().items(statusHistorySchema).default([]),
        location: locationSchema.required()
    }),

    updateSchema: Joi.object({
        agent_id: Joi.number().integer().positive().optional().allow(null),
        assigned_by: Joi.number().integer().positive().optional().allow(null),
        assigned_team: assignedTeamSchema.optional().allow(null),
        status: Joi.string().optional(),
        location: locationSchema.optional()
    }).min(1)
};