import * as treatmentCenterDto from './treatmentCenter.dto.js';
import { treatmentCenterEntity } from './treatmentCenter.entity.js';
import { treatmentCenterService } from './treatmentCenter.service.js';
import handlerRequest from '@utils/handlerRequest.js';
import { handlerBody } from '@utils/handlerBody.js';

// Get all reports
export const getAllTreatmentCenters = handlerBody(async (req, res) => {
    return await treatmentCenterService.getTreatmentCenters();
});

export const getTreatmentCenter = handlerBody(async (req, res) => {
    return await treatmentCenterService.getTreatmentCenterByCenterId(req.params.id);
});

/**
 * Create a new treatment center
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const createTreatmentCenter = handlerRequest(treatmentCenterDto.createTreatmentCenterDTO, treatmentCenterEntity, async (treatmentCenter) => {
    const newTreatmentCenter = await treatmentCenterService.createTreatmentCenter(treatmentCenter);
    return newTreatmentCenter;
});

// Update report
export const updateTreatmentCenter = handlerRequest(treatmentCenterDto.updateTreatmentCenterDTO, treatmentCenterEntity, async (treatmentCenter) => {
    const updatedTreatmentCenter = await treatmentCenterService.updateTreatmentCenter(treatmentCenter);
    return updatedTreatmentCenter;
});

// Delete report
export const deleteTreatmentCenter = handlerRequest(treatmentCenterDto.deleteTreatmentCenterDTO, treatmentCenterEntity, async (treatmentCenter) => {
    const deletedTreatmentCenter = await treatmentCenterService.deleteTreatmentCenter(treatmentCenter);
    return deletedTreatmentCenter;
});