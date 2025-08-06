const { createReportDto, updateReportDto, deleteReportDto } = require('./report.dto');

// Get all reports
const getReports = handlerBody(async (req, res) => {
    return await reportService.getReports();
});

// Get single report
const getReport = handlerBody(async (req, res) => {
    return await reportService.getReport(req.params.id);
});

/**
 * Create a new report
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const createReport = handlerRequest(createReportDto, reportEntity, async (report) => {
    const newReport = await reportService.createReport(report);
    return newReport;
});

// Update report
const updateReport = handlerRequest(updateReportDto, reportEntity, async (report) => {
    const updatedReport = await reportService.updateReport(report);
    return updatedReport;
});

// Delete report
const deleteReport = handlerRequest(deleteReportDto, reportEntity, async (report) => {
    const deletedReport = await reportService.deleteReport(report);
    return deletedReport;
});

module.exports = {
    getReports,
    getReport,
    createReport,
    updateReport,
    deleteReport
};