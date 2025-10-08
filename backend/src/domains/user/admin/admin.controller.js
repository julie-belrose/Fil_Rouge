import * as adminDto from '#domains/user/admin/admin.dto.js';
import { adminService } from '#domains/user/admin/admin.service.js';
import { adminEntity } from '#domains/user/admin/admin.entity.js';
import { handlerBody } from '#utils/handlerBody.js';
import handlerRequest from '#utils/handlerRequest.js';

// Get all admins
export const getAllAdmins = handlerBody(async (req, res) => {
    return await adminService.getAllAdmins();
});

// Get single admin
export const getAdmin = handlerBody(async (req, res) => {
    return await adminService.getAdmin(req.params.id);
});

/**
     * Creates a new admin
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     */
export const createAdmin = handlerRequest(adminDto.createAdminDTO, adminEntity, async (admin) => {
    const newAdmin = await adminService.createAdmin(admin);
    return newAdmin;
});

// Update admin
export const updateAdmin = handlerRequest(adminDto.updateAdminDTO, adminEntity, async (admin) => {
    const updatedAdmin = await adminService.updateAdmin(admin);
    return updatedAdmin;
});

// Delete admin
export const deleteAdmin = handlerRequest(adminDto.deleteAdminDTO, adminEntity, async (admin) => {
    const deletedAdmin = await adminService.deleteAdmin(admin);
    return deletedAdmin;
});