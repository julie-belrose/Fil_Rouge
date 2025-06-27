import express from 'express';
import * as treatmentCenterController from '#domains/treatmentCenter/treatmentCenter.controller.js';

const router = express.Router();

router.get('/:id', treatmentCenterController.getTreatmentCenter);
router.get('/', treatmentCenterController.getAllTreatmentCenters);
router.post('/', treatmentCenterController.createTreatmentCenter);
router.put('/:id', treatmentCenterController.updateTreatmentCenter);
router.delete('/:id', treatmentCenterController.deleteTreatmentCenter);

export default router;
