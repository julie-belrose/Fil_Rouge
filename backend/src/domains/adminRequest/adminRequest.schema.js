import Joi from 'joi';

/**
 * Schema for creating a new adminRequest
 * @type {Joi.ObjectSchema}
 */
export const createSchema = Joi.object({
    hashed_token: Joi.string().required(),
    related_user_id: Joi.string().required(),
    status: Joi.string().valid('PENDING', 'CONFIRMED', 'EXPIRED').required(),
    created_at: Joi.date().default(() => new Date(), 'current date'),
    expires_at: Joi.date().required()
});

/**
 * Schema for updating an existing adminRequest
 * @type {Joi.ObjectSchema}
*/
export const updateSchema = Joi.object({
    hashed_token: Joi.string().optional(),
    related_user_id: Joi.string().optional(),
    status: Joi.string().valid('PENDING', 'CONFIRMED', 'EXPIRED').optional(),
    created_at: Joi.date().optional(),
    expires_at: Joi.date().optional()
 }).min(1);

/**
 * Schema for deleting an adminRequest
 * @type {Joi.ObjectSchema}
 */
export const deleteSchema = Joi.object({
    id: Joi.number().required()
});