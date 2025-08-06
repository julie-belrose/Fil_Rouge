const { createReportDto } = require('./report.dto');

// Get all reports
const getReports = (req, res) => {
    res.json('GetReports Controller OK');
};

// Get single report
const getReport = (req, res) => {
    res.json(`GetReport ${req.params.id} Controller OK`);
};

/**
 * Create a new report
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const createReport = async (req, res) => {
    try {
        // 1. Validation of inputs
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        // 2. Validation and transformation with DTO
        const validatedData = createReportDto({
            ...req.body,
            user_id: req.user.id  // Add connected user
        });

        // 3. Create entity from validated data
        const report = reportEntity(validatedData);

        // 4. Verify validity
        if (!report.isValid()) {
            throw new Error('Invalid report data');
        }

        // 5. Call service
        const newReport = await reportService.createReport(report);

        // 6. Response
        res.status(201).json({
            success: true,
            data: newReport
        });
    } catch (error) {
        console.error('Error in createReport:', error);
        const statusCode = error.message.includes('Validation') ? 400 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message
        });
    }
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