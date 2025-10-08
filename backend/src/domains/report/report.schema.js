import Joi from 'joi';

export const statusHistorySchema = Joi.object({
    status: Joi.string().required(),
    date: Joi.date().default(() => new Date()),
    updated_by: Joi.number().integer().positive().required()
});

export const locationSchema = Joi.object({
    lat: Joi.number().min(-90).max(90).required(),
    lng: Joi.number().min(-180).max(180).required()
});

export const assignedTeamSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().required(),
    center_id: Joi.number().integer().positive().required()
});

export const updateSchema = Joi.object({
    agent_id: Joi.number().integer().positive().optional().allow(null),
    assigned_by: Joi.number().integer().positive().optional().allow(null),
    assigned_team: assignedTeamSchema.optional().allow(null),
    status: Joi.string().optional(),
    location: locationSchema.optional()
}).min(1);

export const createSchema = Joi.object({
    user_id: Joi.number().integer().positive().required(),
    agent_id: Joi.number().integer().positive().optional().allow(null),
    assigned_by: Joi.number().integer().positive().optional().allow(null),
    assigned_team: assignedTeamSchema.optional().allow(null),
    status: Joi.string().required(),
    status_history: Joi.array().items(statusHistorySchema).default([]),
    location: locationSchema.required()
});