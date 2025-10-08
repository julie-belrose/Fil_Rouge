import Joi from 'joi';

export const createAdminSchema = Joi.object({
    user_id: Joi.number().integer().positive().required()
        .description('ID of the user to be made admin'),
    center_id: Joi.number().integer().positive().required()
        .description('ID of the treatment center the admin will manage')
}).required();