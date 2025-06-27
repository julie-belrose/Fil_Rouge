import * as authDto from '#domains/auth/auth.dto.js';
import { authService } from '#domains/auth/auth.service.js';
import { authEntity } from '#domains/auth/auth.entity.js';
import handlerRequest from '#utils/handlerRequest.js';

/**
 * Login user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const login = handlerRequest(authDto.loginDTO, authEntity, async (authData) => {
    return newAuth = await authService.login(authData);
// if (authData.role === 'admin_pending') {
//     await adminRequestService.createAdminRequest(newAuth.user_id);
// }
});

/**
 * Logout user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const logout = handlerRequest(authDto.logoutDTO, authEntity, async (authData) => {
    return await authService.logout(authData);
});

/**
 * Create a new user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const register = handlerRequest(authDto.registerDTO, authEntity, async (authData) => {
    return await authService.register(authData);
// if (authData.role === 'admin_pending') {
//     await adminRequestService.createAdminRequest(newAuth.user_id);
// }
});