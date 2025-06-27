const Joi = require('joi');

const adminSchema = {
    create: Joi.object({
        firstName: Joi.string().required().min(2).max(50),
        lastName: Joi.string().required().min(2).max(50),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        role: Joi.string().valid('admin', 'superadmin').default('admin'),
        permissions: Joi.array().items(Joi.string())
    }),

    update: Joi.object({
        firstName: Joi.string().min(2).max(50),
        lastName: Joi.string().min(2).max(50),
        email: Joi.string().email(),
        password: Joi.string().min(8),
        role: Joi.string().valid('admin', 'superadmin'),
        permissions: Joi.array().items(Joi.string())
    }).min(1)
};

module.exports = adminSchema;