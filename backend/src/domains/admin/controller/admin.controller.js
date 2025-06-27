const { createAdminDto } = require('../dto/admin.dto');

// Get all admins
const getAllAdmins = (req, res) => {
    res.json('Get AllAdmins Controller OK');
};

// Get single admin
const getAdmin = (req, res) => {
    res.json(`GetAdmin ${req.params.id} Controller OK`);
};

// Create admin
const createAdmin = async (req, res) => {
    try {
        // 1. Validate data with DTO
        const adminData = createAdminDto(req.body);

        // 2. Check if email already exists
        const existingAdmin = await AdminModel.findByEmail(adminData.email);
        if (existingAdmin) {
            return res.status(400).json({
                success: false,
                message: 'This email is already used'
            });
        }

        // 3. Create admin
        const newAdmin = await AdminModel.create(adminData);

        // 4. Response (without password)
        const { password, ...adminWithoutPassword } = newAdmin;

        res.status(201).json({
            success: true,
            data: adminWithoutPassword
        });

    } catch (error) {
        console.error('Error creating admin:', error);

        // Error handling specific
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: 'Invalid data',
                errors: error.errors
            });
        }

        // Error server generic
        res.status(500).json({
            success: false,
            message: 'Error creating admin',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

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