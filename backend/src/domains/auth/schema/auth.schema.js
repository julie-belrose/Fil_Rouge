const Joi = require('joi');

module.exports = {
    registerSchema: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        role: Joi.string().valid('user', 'agent', 'admin').default('user').required(),
        is_active: Joi.boolean().default(true)
    }),

    loginSchema: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }),

    updateSchema: Joi.object({
        email: Joi.string().email(),
        is_active: Joi.boolean()
    }).min(1)
};