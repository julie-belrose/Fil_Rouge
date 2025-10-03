import express from 'express';
import * as reportController from '#domains/report/report.controller.js';

const router = express.Router();

// Test reports route
router.get('/', (req, res) => {
    res.json({ message: 'Reports route is working' });
}); 

router.get('/:id', reportController.getReport);
router.get('/', reportController.getReports);
router.post('/', reportController.createReport);
router.put('/:id', reportController.updateReport);
router.delete('/:id', reportController.deleteReport);

export default router;
