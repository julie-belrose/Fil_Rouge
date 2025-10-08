import express from 'express';
import * as adminController from '#domains/user/admin/admin.controller.js';

const router = express.Router();

router.get('/:id', adminController.getAdmin);
router.get('/', adminController.getAllAdmins);
router.post('/', adminController.createAdmin);
router.put('/:id', adminController.updateAdmin);
router.delete('/:id', adminController.deleteAdmin);

export default router;