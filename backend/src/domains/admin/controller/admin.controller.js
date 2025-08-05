const { createAdminDto } = require('../dto/admin.dto');

// Get all admins
const getAllAdmins = (req, res) => {
    res.json('Get AllAdmins Controller OK');
};

// Get single admin
const getAdmin = (req, res) => {
    res.json(`GetAdmin ${req.params.id} Controller OK`);
};

/**
     * Creates a new admin
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     */
const createAdmin = async (req, res) => {
    try {
        // 1. Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        // 2. Create DTO and validate
        const adminData = createAdminDto({
            ...req.body,
            // In a real app, you might want to get this from the authenticated user
            created_by: req.user?.id
        });

        // 3. Create admin using service
        const admin = await adminService.createAdmin(adminData);

        // 4. Return response
        res.status(201).json({
            success: true,
            data: admin
        });
    } catch (error) {
        console.error('Error in createAdmin:', error);
        const statusCode = error.message.includes('Validation') ? 400 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message
        });
    }
}

// Update admin
const updateAdmin = (req, res) => {
    res.json(`UpdateAdmin ${req.params.id} Controller OK`);
};

// Delete admin
const deleteAdmin = (req, res) => {
    res.json(`DeleteAdmin ${req.params.id} Controller OK`);
};

module.exports = {
    getAllAdmins,
    getAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin
};