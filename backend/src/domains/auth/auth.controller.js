const { loginDto, registerDto } = require('./auth.dto');
const AuthentificationService = require('./auth.service');
const adminRequestService = require('../adminRequest/adminRequest.service');

// Login user
/**
 * Logout user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const login = async (req, res) => {
    try {
        // Validation des entrées
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        // Validation and transformation with DTO
        const authData = loginDto(req.body);

        // Création de l'entité
        const auth = authEntity({
            ...authData,
            created_by: req.user.id
        });

        // Vérification de la validité de l'entité
        if (!auth.isValid()) {
            throw new Error('Invalid auth data');
        }

        // Call service
        const newAuth = await AuthentificationService.login(auth);

        if (auth.role === 'admin_pending') {
            await adminRequestService.createAdminRequest(newAuth.user_id);
        }

        // Response
        res.status(201).json({
            success: true,
            data: newAuth
        });

    } catch (error) {
        console.error('Error in login:', error);
        const statusCode = error.message.includes('Validation') ? 400 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message
        });
    }
};



/**
 * Logout user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const logout = async (req, res) => {
    try {
        // Validation des entrées
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        // Validation and transformation with DTO
        const authData = logoutDto(req.body);

        // Création de l'entité
        const auth = authEntity({
            ...authData,
            created_by: req.user.id
        });

        // Vérification de la validité de l'entité
        if (!auth.isValid()) {
            throw new Error('Invalid auth data');
        }

        // Call service
        const newAuth = await AuthentificationService.logout(auth);

        // Response
        res.status(201).json({
            success: true,
            data: newAuth
        });

    } catch (error) {
        console.error('Error in createAgent:', error);
        const statusCode = error.message.includes('Validation') ? 400 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message
        });
    }
};


/**
 * Create a new user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const register = async (req, res) => {
    try {
        // Validation of inputs
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        // Validation and transformation with DTO
        const authData = registerDto(req.body);

        // Create entity
        const auth = authEntity({
            ...authData,
            created_by: req.user.id
        });

        // Verify entity validity
        if (!auth.isValid()) {
            throw new Error('Invalid auth data');
        }

        // Call service
        const newAuth = await AuthentificationService.createAuth(auth);

        if (auth.role === 'admin_pending') {
            await AdminRequestService.createRequestForUser(newAuth.user_id);
        }

        //Response
        res.status(201).json({
            success: true,
            data: newAuth
        });

    } catch (error) {
        console.error('Error in register:', error);
        const statusCode = error.message.includes('Validation') ? 400 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message
        });
    }
};


module.exports = {
    login,
    register,
    logout
};