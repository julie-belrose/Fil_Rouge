const Joi = require('joi');

module.exports = {

    collectionCalendarSchema: Joi.object({
        day: Joi.string().valid(
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
          ).required(),              
        start_time: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).required(),
        end_time: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).required(),        
        waste_type: Joi.string().required(),       
        frequency: Joi.string().valid('weekly', 'monthly', 'exceptional').required(),       
        is_active: Joi.boolean().required(),        
    }),

    locationSchema: Joi.object({
        lat: Joi.number().min(-90).max(90).required(),
        lng: Joi.number().min(-180).max(180).required()
    }),

    /**
     * Schema for creating a new treatment center
     * @type {Joi.ObjectSchema}
     */
    createSchema: Joi.object({
        center_id: Joi.number().integer().positive().required(),
        name: Joi.string().required(),
        zone_covered: Joi.string().required(),
        location: locationSchema.required(),
        collection_calendar: Joi.array().items(collectionCalendarSchema).required(),
        notes: Joi.string().optional(),
    }),

    updateSchema: Joi.object({
        center_id: Joi.number().integer().positive().optional().allow(null),
        name: Joi.string().optional(),
        zone_covered: Joi.string().optional(),
        location: locationSchema.optional(),
        collection_calendar: Joi.array().items(collectionCalendarSchema).optional(),
        notes: Joi.string().optional()
    }).min(1)
};