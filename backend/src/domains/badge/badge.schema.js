import Joi from 'joi';

/**
 * Schema for creating a new badge
 * @type {Joi.ObjectSchema}
 */
export const createSchema = Joi.object({
    name: Joi.string().required(),
        description: Joi.string().required(),
        image_url: Joi.string().optional(),
    created_at: Joi.date().default(() => new Date()),
});

export const updateSchema = Joi.object({
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    image_url: Joi.string().optional(),
    created_at: Joi.date().optional()
}).min(1);
