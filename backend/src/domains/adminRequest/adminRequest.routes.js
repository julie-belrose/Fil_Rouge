import express from 'express';
import * as adminRequestController from './adminRequest.controller.js';

const router = express.Router();

router.post('/register', adminRequestController.createAdminRequest);
router.get('/:id', adminRequestController.getAdminRequstById);
router.get('/', adminRequestController.getAdminRequest);
router.put('/:id', adminRequestController.updateAdminRequest);
router.delete('/:id', adminRequestController.deleteAdminRequest);

export default router;