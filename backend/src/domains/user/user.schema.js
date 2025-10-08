import Joi from 'joi';

/**
 * Schema for creating a new user
 * @type {Joi.ObjectSchema}
 */
export const createSchema = Joi.object({
    auth_id: Joi.number().integer().required(),
    pseudo: Joi.string().allow(null, '').optional(),
    district: Joi.string().allow(null, '').optional(),
    loyalty_points: Joi.number().integer().default(0)
});

/**
 * Schema for updating an existing user
 * @type {Joi.ObjectSchema}
 */
export const updateSchema = Joi.object({
    pseudo: Joi.string().allow(null, '').optional(),
    district: Joi.string().allow(null, '').optional(),
    loyalty_points: Joi.number().integer()
}).min(1); // At least one field required for update