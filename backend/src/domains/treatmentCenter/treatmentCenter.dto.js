import { createSchema, updateSchema } from '#domains/treatmentCenter/treatmentCenter.schema.js';
import { treatmentCenterEntity } from '#domains/treatmentCenter/treatmentCenter.entity.js';
import { validateAndTransform } from '#utils/parseDTO.js';


export const createTreatmentCenterDTO = (data) => {
    return validateAndTransform(data, createSchema, treatmentCenterEntity);
};

export const updateTreatmentCenterDTO = (data) => {
    return validateAndTransform(data, updateSchema, treatmentCenterEntity);
};

export const deleteTreatmentCenterDTO = (data) => {
    //todo
};
