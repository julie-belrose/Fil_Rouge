import Joi from 'joi';

export const registerSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        role: Joi.string().valid('user', 'agent', 'admin').default('user').required(),
        is_active: Joi.boolean().default(true)
});

export const loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
});

export const logoutSchema = Joi.object({
        email: Joi.string().email().required()
});

export const updateSchema = Joi.object({
        email: Joi.string().email(),
        is_active: Joi.boolean()
}).min(1);