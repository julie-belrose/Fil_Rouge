const { createAdminRequestDto, updateAdminRequestDto, deleteAdminRequestDto } = require('./adminRequest.dto');
const adminRequestEntity = require('./adminRequest.entity');
const adminRequestService = require('./adminRequest.service');
const handlerRequest = require('../utils/handlerRequest');
const handlerBody = require('../utils/handlerBody');

// Get all admin_requests
const getAdminRequests = handlerBody(async (req, res) => {
    return await adminRequestService.getAdminRequests();
});

// Get single adminRequest
const getAdminRequest = handlerBody(async (req, res) => {
    const admin_request = adminRequestService.getAdminRequestById(req.params.id);
    return admin_request;
});


const createAdminRequest = handlerRequest(createAdminRequestDto, adminRequestEntity, async (admin_request) => {
    const newAdminRequest = await adminRequestService.createAdminRequest(admin_request);
    return newAdminRequest;
});


// Update adminRequest
const updateAdminRequest = handlerRequest(updateAdminRequestDto, adminRequestEntity, async (admin_request) => {
    const admin_request = adminRequestService.updateAdminRequest(req.params.id, req.body);
    return admin_request;
});

// Delete adminRequest
const deleteAdminRequest = handlerRequest(deleteAdminRequestDto, adminRequestEntity, async (admin_request) => {
    const admin_request = adminRequestService.deleteAdminRequest(req.params.id);
    return admin_request;
});

module.exports = {
    getAdminRequests,
    getAdminRequest,
    createAdminRequest,
    updateAdminRequest,
    deleteAdminRequest
};