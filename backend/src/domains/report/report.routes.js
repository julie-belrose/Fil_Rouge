const express = require('express');
const router = express.Router();

const {
    getReports,
    getReport,
    createReport,
    updateReport,
    deleteReport
} = require('./report.controller');

// Test agents route
router.get('/', (req, res) => {
    res.json({ message: 'Reports route is working' });
}); 

router.get('/:id', getReport);
router.get('/', getReports);
router.post('/', createReport);
router.put('/:id', updateReport);
router.delete('/:id', deleteReport);

module.exports = router;
