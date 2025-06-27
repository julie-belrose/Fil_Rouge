const { createReportDto } = require('../dto/report.dto');

// Get all reports
const getReports = (req, res) => {
    res.json('GetReports Controller OK');
};

// Get single report
const getReport = (req, res) => {
    res.json(`GetReport ${req.params.id} Controller OK`);
};

// Create report
const createReport = (req, res) => {
    const reportData = createReportDto(req.body);
    const report = reportEntity(reportData);
    console.log(report);
    console.log(reportData);
    res.status(201).json('CreateReport Controller OK');
};

// Update report
const updateReport = (req, res) => {
    res.json(`UpdateReport ${req.params.id} Controller OK`);
};

// Delete report
const deleteReport = (req, res) => {
    res.json(`DeleteReport ${req.params.id} Controller OK`);
};

module.exports = {
    getReports,
    getReport,
    createReport,
    updateReport,
    deleteReport
};