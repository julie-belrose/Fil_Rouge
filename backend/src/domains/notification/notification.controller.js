const { createNotificationDto } = require('./notification.dto');

// Get all reports
const getNotifications = (req, res) => {
    res.json('GetNotifications Controller OK');
};

// Get single report
const getNotification = (req, res) => {
    res.json(`GetNotification ${req.params.id} Controller OK`);
};

/**
 * Create a new report
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const createNotification = async (req, res) => {
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
        const validatedData = createNotificationDto({
            ...req.body,
            user_id: req.user.id  // Add connected user
        });

        // 3. Create entity from validated data
        const notification = notificationEntity(validatedData);

        // 4. Verify validity
        if (!notification.isValid()) {
            throw new Error('Invalid notification data');
        }

        // 5. Call service
        const newNotification = await notificationService.createNotification(notification);

        // 6. Response
        res.status(201).json({
            success: true,
            data: newNotification
        });
    } catch (error) {
        console.error('Error in createNotification:', error);
        const statusCode = error.message.includes('Validation') ? 400 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message
        });
    }
};

// Update report
const updateNotification = (req, res) => {
    res.json(`UpdateNotification ${req.params.id} Controller OK`);
};

// Delete report
const deleteNotification = (req, res) => {
    res.json(`DeleteNotification ${req.params.id} Controller OK`);
};

module.exports = {
    getNotifications,
    getNotification,
    createNotification,
    updateNotification,
    deleteNotification
};