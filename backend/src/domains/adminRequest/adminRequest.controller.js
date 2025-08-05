const { createAdminRequestDto } = require('./adminRequest.dto');
const adminRequestEntity = require('./adminRequest.entity');
const adminRequestService = require('./adminRequest.service');

// Get all admin_requests
const getAdminRequests = (req, res) => {
    res.json('GetAdminRequests Controller OK');
};

// Get single adminRequest
const getAdminRequest = (req, res) => {
    res.json(`GetAdminRequest ${req.params.id} Controller OK`);
};

/**
 * Create a new adminRequest
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const createAdminRequest = async (req, res) => {
    try {
        // 1. Validation des entrées
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        // 2. Validation et transformation avec DTO
        const admin_requestData = createAdminRequestDto(req.body);

        // 3. Création de l'entité
        const admin_request = adminRequestEntity({
            ...admin_requestData,
            created_by: req.user.id  // ID de l'utilisateur connecté
        });

        // 4. Vérification de la validité de l'entité
        if (!admin_request.isValid()) {
            throw new Error('Invalid adminRequest data');
        }

        // 5. Appel au service
        const newAdminRequest = await adminRequestService.createAdminRequest(admin_request);

        // 6. Réponse
        res.status(201).json({
            success: true,
            data: newAdminRequest
        });

    } catch (error) {
        console.error('Error in createAdminRequest:', error);
        const statusCode = error.message.includes('Validation') ? 400 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message
        });
    }
};


// Update adminRequest
const updateAdminRequest = (req, res) => {
    res.json(`UpdateAdminRequest ${req.params.id} Controller OK`);
};

// Delete adminRequest
const deleteAdminRequest = (req, res) => {
    res.json(`DeleteAdminRequest ${req.params.id} Controller OK`);
};

module.exports = {
    getAdminRequests,
    getAdminRequest,
    createAdminRequest,
    updateAdminRequest,
    deleteAdminRequest
};