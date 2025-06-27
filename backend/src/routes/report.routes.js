const express = require('express');
const router = express.Router();

const {
    getReports,
    getReportDetails,
    createReport,
    updateReport,
    deleteReport
} = require('../domains/report/controller/report.controller');
const { getReportDetails } = require('../domains/report/service/report.service');

// Test agents route
router.get('/', (req, res) => {
    res.json({ message: 'Reports route is working' });
}); 

router.get('/:id', getReportDetails);
router.get('/', getReports);
router.post('/', createReport);
router.put('/:id', updateReport);
router.delete('/:id', deleteReport);

module.exports = router;
