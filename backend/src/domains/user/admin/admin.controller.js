const { createAdminDto, updateAdminDto, deleteAdminDto } = require('./admin.dto');
const adminService = require('./admin.service');
const adminEntity = require('./admin.entity');
const handlerBody = require('../utils/handlerBody');
const handlerRequest = require('../utils/handlerRequest');

// Get all admins
const getAllAdmins = handlerBody(async (req, res) => {
    return await adminService.getAllAdmins();
});

// Get single admin
const getAdmin = handlerBody(async (req, res) => {
    return await adminService.getAdmin(req.params.id);
});

/**
     * Creates a new admin
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     */
const createAdmin = handlerRequest(createAdminDto, adminEntity, async (admin) => {
    const newAdmin = await adminService.createAdmin(admin);
    return newAdmin;
});

// Update admin
const updateAdmin = handlerRequest(updateAdminDto, adminEntity, async (admin) => {
    const updatedAdmin = await adminService.updateAdmin(admin);
    return updatedAdmin;
});

// Delete admin
const deleteAdmin = handlerRequest(deleteAdminDto, adminEntity, async (admin) => {
    const deletedAdmin = await adminService.deleteAdmin(admin);
    return deletedAdmin;
});

module.exports = {
    getAllAdmins,
    getAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin
};