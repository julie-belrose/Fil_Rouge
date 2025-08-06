const Joi = require('joi');

/**
 * Joi validation schemas for user operations
 */
module.exports = {
    /**
     * Schema for creating a new user
     * @type {Joi.ObjectSchema}
     */
    createSchema: Joi.object({
        auth_id: Joi.number().integer().required(),
        pseudo: Joi.string().allow(null, '').optional(),
        first_name: Joi.string().allow(null, '').optional(),
        last_name: Joi.string().allow(null, '').optional(),
        district: Joi.string().allow(null, '').optional(),
        loyalty_points: Joi.number().integer().default(0)
    }),

    /**
     * Schema for updating an existing user
     * @type {Joi.ObjectSchema}
     */
    updateSchema: Joi.object({
        pseudo: Joi.string().allow(null, '').optional(),
        first_name: Joi.string().allow(null, '').optional(),
        last_name: Joi.string().allow(null, '').optional(),
        district: Joi.string().allow(null, '').optional(),
        loyalty_points: Joi.number().integer()
    }).min(1) // Au moins un champ requis pour la mise à jour
};