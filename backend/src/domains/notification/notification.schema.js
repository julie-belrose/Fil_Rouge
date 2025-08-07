const Joi = require('joi');

module.exports = {
    createSchema: Joi.object({
        user_id: Joi.number().integer().positive().required(),
        title: Joi.string().required(),
        content: Joi.string().required(),
        target_type: Joi.string().optional(),
        target_id: Joi.number().integer().positive().optional(),
        read: Joi.boolean().required(),
        created_at: Joi.date().default(() => new Date(), 'current date'),
    }),

    updateSchema: Joi.object({
        user_id: Joi.number().integer().positive().optional().allow(null),
        title: Joi.string().optional(),
        content: Joi.string().optional(),
        target_type: Joi.string().optional(),
        target_id: Joi.number().integer().positive().optional().allow(null),
        read: Joi.boolean().optional(),
    }).min(1)
};