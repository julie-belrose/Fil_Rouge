import Joi from 'joi';

/**
 * Schema for creating a new notification
 * @type {Joi.ObjectSchema}
 */
export const createSchema = Joi.object({
    user_id: Joi.number().integer().positive().required(),
    title: Joi.string().required(),
    content: Joi.string().required(),
    target_type: Joi.string().optional(),
    target_id: Joi.number().integer().positive().optional(),
    read: Joi.boolean().required(),
    created_at: Joi.date().default(() => new Date()),
});

export const updateSchema = Joi.object({
    user_id: Joi.number().integer().positive().optional().allow(null),
    title: Joi.string().optional(),
    content: Joi.string().optional(),
    target_type: Joi.string().optional(),
    target_id: Joi.number().integer().positive().optional().allow(null),
    read: Joi.boolean().optional(),
}).min(1);