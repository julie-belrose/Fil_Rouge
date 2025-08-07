import express from 'express';
const router = express.Router();

import * as treatmentCenterController from './treatmentCenter.controller.js';

router.get('/:id', treatmentCenterController.getTreatmentCenter);
router.get('/', treatmentCenterController.getAllTreatmentCenters);
router.post('/', treatmentCenterController.createTreatmentCenter);
router.put('/:id', treatmentCenterController.updateTreatmentCenter);
router.delete('/:id', treatmentCenterController.deleteTreatmentCenter);

export default router;
