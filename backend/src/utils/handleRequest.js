const { validationResult } = require('express-validator');

/**
 * Handles validation errors using express-validator
 * @param {Object} req - Express request object
 * @returns {Array|null} - Array of errors or null
 */
const getValidationErrors = (req) => {
    const errors = validationResult(req);
    return errors.isEmpty() ? null : errors.array();
};

/**
 * Builds the entity from the DTO data and request context
 * @param {Function} dtoFn - DTO validator function
 * @param {Function} entityFn - Entity factory
 * @param {Object} req - Express request object
 * @returns {Object} - Created entity
 */
const buildEntityFromRequest = (dtoFn, entityFn, req) => {
    const dtoData = dtoFn(req.body);
    return entityFn({ ...dtoData, created_by: req.user?.id });
};

/**
 * Handles request with validation, DTO, entity and error wrapping
 * @param {Function} dtoFn - DTO function 
 * @param {Function} entityFn - entity factory function 
 * @param {Function} handler - async business logic function (entity, req, res)
 * @returns {Function} Express-compatible route handler
 */
const handlerRequest = (dtoFn, entityFn, handler) => {
    return async (req, res) => {
        try {
            const errors = getValidationErrors(req);
            if (errors) {
                return res.status(400).json({ success: false, errors });
            }

            const entity = buildEntityFromRequest(dtoFn, entityFn, req);

            if (!entity.isValid()) {
                throw new Error('Invalid data');
            }

            const result = await handler(entity, req, res);

            res.status(201).json({ success: true, data: result });

        } catch (error) {
            console.error('Error in handlerRequest:', error);
            const statusCode = error.message.includes('Validation') ? 400 : 500;
            res.status(statusCode).json({ success: false, message: error.message });
        }
    };
};

module.exports = handlerRequest;
