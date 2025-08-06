const { loginDto, registerDto } = require('./auth.dto');
const AuthentificationService = require('./auth.service');
const adminRequestService = require('../adminRequest/adminRequest.service');

// Login user
/**
 * Logout user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const login = handlerRequest(loginDto, authEntity, async (auth) => {
    const newAuth = await AuthentificationService.login(auth);
    if (auth.role === 'admin_pending') {
        await adminRequestService.createAdminRequest(newAuth.user_id);
    }
    return newAuth;
});



/**
 * Logout user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const logout = handlerRequest(logoutDto, authEntity, async (auth) => {
    const newAuth = await AuthentificationService.logout(auth);
    return newAuth;
});


/**
 * Create a new user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const register = handlerRequest(registerDto, authEntity, async (auth) => {
    const newAuth = await AuthentificationService.createAuth(auth);
    if (auth.role === 'admin_pending') {
        await adminRequestService.createAdminRequest(newAuth.user_id);
    }
    return newAuth;
});


module.exports = {
    login,
    register,
    logout
};