const { createAdminDto } = require('../dto/admin.dto');

// Get all admins
const getAdmins = (req, res) => {
    res.json('GetAdmins Controller OK');
};

// Get single admin
const getAdmin = (req, res) => {
    res.json(`GetAdmin ${req.params.id} Controller OK`);
};

// Create admin
const createAdmin = (req, res) => {
    const adminData = createAdminDto(req.body);
    const admin = adminEntity(adminData);
    console.log(admin);
    console.log(adminData);
    res.status(201).json('CreateAdmin Controller OK');
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
    getAdmins,
    getAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin
};