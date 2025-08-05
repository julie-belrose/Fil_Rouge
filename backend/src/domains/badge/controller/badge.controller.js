const { createBadgeDto } = require('../dto/badge.dto');

// Get all badges
const getBadges = (req, res) => {
    res.json('GetBadges Controller OK');
};

// Get single badge
const getBadge = (req, res) => {
    res.json(`GetBadge ${req.params.id} Controller OK`);
};

/**
 * Create a new badge
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const createBadge = async (req, res) => {
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
        const badgeData = createBadgeDto(req.body);

        // 3. Création de l'entité
        const badge = badgeEntity({
            ...badgeData,
            created_by: req.user.id  // ID de l'utilisateur connecté
        });

        // 4. Vérification de la validité de l'entité
        if (!badge.isValid()) {
            throw new Error('Invalid badge data');
        }

        // 5. Appel au service
        const newBadge = await badgeService.createBadge(badge);

        // 6. Réponse
        res.status(201).json({
            success: true,
            data: newBadge
        });

    } catch (error) {
        console.error('Error in createBadge:', error);
        const statusCode = error.message.includes('Validation') ? 400 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message
        });
    }
};


// Update badge
const updateBadge = (req, res) => {
    res.json(`UpdateBadge ${req.params.id} Controller OK`);
};

// Delete badge
const deleteBadge = (req, res) => {
    res.json(`DeleteBadge ${req.params.id} Controller OK`);
};

module.exports = {
    getBadges,
    getBadge,
    createBadge,
    updateBadge,
    deleteBadge
};