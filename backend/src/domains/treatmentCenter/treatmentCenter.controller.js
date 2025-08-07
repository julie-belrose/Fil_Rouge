const { createTreatmentCenterDto, updateTreatmentCenterDto, deleteTreatmentCenterDto } = require('./treatmentCenter.dto');
const treatmentCenterEntity = require('./treatmentCenter.entity');
const TreatmentCenterService = require('./treatmentCenter.service');
const handlerRequest = require('../../utils/handlerRequest');
const handlerBody = require('../../utils/handlerBody');

// Get all reports
const getAllTreatmentCenters = handlerBody(async (req, res) => {
    return await TreatmentCenterService.getTreatmentCenters();
});

const getTreatmentCenter = handlerBody(async (req, res) => {
    return await TreatmentCenterService.getTreatmentCenterByCenterId(req.params.id);
});

/**
 * Create a new treatment center
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const createTreatmentCenter = handlerRequest(createTreatmentCenterDto, treatmentCenterEntity, async (treatmentCenter) => {
    const newTreatmentCenter = await TreatmentCenterService.createTreatmentCenter(treatmentCenter);
    return newTreatmentCenter;
});

// Update report
const updateTreatmentCenter = handlerRequest(updateTreatmentCenterDto, treatmentCenterEntity, async (treatmentCenter) => {
    const updatedTreatmentCenter = await TreatmentCenterService.updateTreatmentCenter(treatmentCenter);
    return updatedTreatmentCenter;
});

// Delete report
const deleteTreatmentCenter = handlerRequest(deleteTreatmentCenterDto, treatmentCenterEntity, async (treatmentCenter) => {
    const deletedTreatmentCenter = await TreatmentCenterService.deleteTreatmentCenter(treatmentCenter);
    return deletedTreatmentCenter;
});

module.exports = {
    getAllTreatmentCenters,
    getTreatmentCenter,
    createTreatmentCenter,
    updateTreatmentCenter,
    deleteTreatmentCenter
};