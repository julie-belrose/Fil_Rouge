const reportRepository = require('./repository/report.repository');
const ReportMapper = require('./mapper/report.mapper');

class ReportService {
    /**
    * Creates a new report in the system
    * @param {Object} reportData - The report data to create
    * @param {string} reportData.user_id - ID of the user creating the report
    * @param {Object} reportData.location - Location coordinates
    * @param {number} reportData.location.lat - Latitude coordinate
    * @param {number} reportData.location.lng - Longitude coordinate
    * @param {string} [reportData.status='pending'] - Initial status of the report
    * @param {Array} [reportData.status_history=[]] - History of status changes
    * @returns {Promise<Object>} The created report DTO
    * @throws {Error} If report creation fails
    */
    async createReport(reportData) {
        try {
            const newReport = await reportRepository.create(reportData);
            return ReportMapper.toDTO(newReport);
        } catch (error) {
            console.error('Failed to create report:', error);
            throw new Error(`Failed to create report: ${error.message}`);
        }
    }
}

module.exports = new ReportService();