const { createTreatmentCenterDto } = require('./treatment_center.dto');

// Get all reports
const getTreatmentCenters = (req, res) => {
    res.json('GetTreatmentCenters Controller OK');
};

// Get single report
const getTreatmentCenter = (req, res) => {
    res.json(`GetTreatmentCenter ${req.params.id} Controller OK`);
};

/**
 * Create a new treatment center
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const createTreatmentCenter = async (req, res) => {
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
        const validatedData = createTreatmentCenterDto({
            ...req.body,
            user_id: req.user.id  // Add connected user
        });

        // 3. Create entity from validated data
        const report = treatmentCenterEntity(validatedData);

        // 4. Verify validity
        if (!report.isValid()) {
            throw new Error('Invalid treatment center data');
        }

        // 5. Call service
        const newReport = await reportService.createTreatmentCenter(report);

        // 6. Response
        res.status(201).json({
            success: true,
            data: newReport
        });
    } catch (error) {
        console.error('Error in createTreatmentCenter:', error);
        const statusCode = error.message.includes('Validation') ? 400 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message
        });
    }
};

// Update report
const updateReport = (req, res) => {
    res.json(`UpdateTreatmentCenter ${req.params.id} Controller OK`);
};

// Delete report
const deleteReport = (req, res) => {
    res.json(`DeleteTreatmentCenter ${req.params.id} Controller OK`);
};

module.exports = {
    getTreatmentCenters,
    getTreatmentCenter,
    createTreatmentCenter,
    updateTreatmentCenter,
    deleteTreatmentCenter
};