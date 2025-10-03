/**
 * Validates and transforms input data using a Joi schema and an entity factory
 *
 * @param {Object} data - Raw input data
 * @param {Joi.Schema} schema - Joi schema to validate against
 * @param {Function} entityFn - Entity factory function (ex: adminRequestEntity)
 * @returns {Object} - Transformed entity
 * @throws {Error} - If validation fails
 */
export const validateAndTransform = (data, schema, entityFn) => {
    const { error, value } = schema.validate(data, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const errorMessage = error.details.map(d => d.message).join('; ');
        throw new Error(`Validation error: ${errorMessage}`);
    }

    return entityFn(value);
};
