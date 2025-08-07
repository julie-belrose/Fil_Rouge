import { createSchema, updateSchema } from './treatmentCenter.schema.js';
import { treatmentCenterEntity } from './treatmentCenter.entity.js';
import { validateAndTransform } from '../../utils/parseDTO.js';


export const createTreatmentCenterDTO = (data) => {
    return validateAndTransform(data, createSchema, treatmentCenterEntity);
};

export const updateTreatmentCenterDTO = (data) => {
    return validateAndTransform(data, updateSchema, treatmentCenterEntity);
};

export const deleteTreatmentCenterDTO = (data) => {
    //todo
};
