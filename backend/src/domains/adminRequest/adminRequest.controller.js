import * as adminRequestDto from '#domains/adminRequest/adminRequest.dto.js';
import { adminRequestEntity } from '#domains/adminRequest/adminRequest.entity.js';
import { adminRequestService } from '#domains/adminRequest/adminRequest.service.js';
import handlerRequest from '#utils/handlerRequest.js';
import { handlerBody } from '#utils/handlerBody.js';

// Get all admin_requests
export const getAdminRequest = handlerBody(async (req, res) => adminRequestService.getAdminRequest());

// Get single adminRequest
export const getAdminRequstById = handlerBody((req, res) => adminRequestService.getAdminRequestById(req.params.id));


export const createAdminRequest = handlerRequest(adminRequestDto.createAdminRequestDTO, adminRequestEntity, async (admin_request) => {
    return await adminRequestService.createAdminRequest(admin_request);
});


// Update adminRequest
export const updateAdminRequest = handlerRequest(adminRequestDto.updateAdminRequestDTO, adminRequestEntity, async (req) => {
    return adminRequestService.updateAdminRequest(req.params.id, req.body);
});

// Delete adminRequest
export const deleteAdminRequest = handlerRequest(adminRequestDto.deleteAdminRequestDTO, adminRequestEntity, async (req) => {
    return adminRequestService.deleteAdminRequest(req.params.id);
});