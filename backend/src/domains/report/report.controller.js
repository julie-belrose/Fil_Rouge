import * as reportDTO from './report.dto.js';
import { reportEntity } from './report.entity.js';
import { reportService } from './report.service.js';
import handlerRequest from '@utils/handlerRequest.js';
import { handlerBody } from '@utils/handlerBody.js';

// Get all reports
export const getReports = handlerBody(async (req, res) => {
    return await reportService.getReports();
});

// Get single report
export const getReport = handlerBody(async (req, res) => {
    return await reportService.getReport(req.params.id);
});

/**
 * Create a new report
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const createReport = handlerRequest(reportDTO.createReportDTO, reportEntity, async (report) => {
    const newReport = await reportService.createReport(report);
    return newReport;
});

// Update report
export const updateReport = handlerRequest(reportDTO.updateReportDTO, reportEntity, async (report) => {
    const updatedReport = await reportService.updateReport(report);
    return updatedReport;
});

// Delete report
export const deleteReport = handlerRequest(reportDTO.deleteReportDTO, reportEntity, async (report) => {
    const deletedReport = await reportService.deleteReport(report);
    return deletedReport;
});