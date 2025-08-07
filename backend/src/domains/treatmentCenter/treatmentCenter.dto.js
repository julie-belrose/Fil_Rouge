const { createSchema, updateSchema } = require('./treatmentCenter.schema');
const treatmentCenterEntity = require('./treatmentCenter.entity');
const validateAndTransform = require('../../utils/parseDTO');


const createTreatmentCenterDto = (data) => {
    return validateAndTransform(data, createSchema, treatmentCenterEntity);
};

const updateTreatmentCenterDto = (data) => {
    return validateAndTransform(data, updateSchema, treatmentCenterEntity);
};

const deleteTreatmentCenterDto = (data) => {
    //todo
};

module.exports = { createTreatmentCenterDto, updateTreatmentCenterDto, deleteTreatmentCenterDto };
