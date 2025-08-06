const Joi = require('joi');

module.exports = {
    /**
     * Schema for creating a new badge
     * @type {Joi.ObjectSchema}
     */
    createSchema: Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        image_url: Joi.string().optional(),
        created_at: Joi.date().default(() => new Date(), 'current date'),
    }),

    updateSchema: Joi.object({
        name: Joi.string().optional(),
        description: Joi.string().optional(),
        image_url: Joi.string().optional(),
        created_at: Joi.date().optional()
    }).min(1)
};