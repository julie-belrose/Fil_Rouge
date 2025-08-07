const { createBadgeDto, updateBadgeDto, deleteBadgeDto } = require('./badge.dto');
const badgeEntity = require('./badge.entity');
const BadgeService = require('./badge.service');
const handlerRequest = require('../../utils/handlerRequest');
const handlerBody = require('../../utils/handlerBody');

// Get all badges
const getBadges = handlerBody(async (req, res) => {
    return await BadgeService.getBadges();
});

// Get single badge
const getBadge = handlerBody(async (req, res) => {
    const badge = await BadgeService.getBadgeByUserId(req.params.id);
    return badge;
});

/**
 * Create a new badge
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const createBadge = handlerRequest(createBadgeDto, badgeEntity, async (badge) => {
    const newBadge = await BadgeService.createBadge(badge);
    return newBadge;
});

// Update badge
const updateBadge = handlerRequest(updateBadgeDto, badgeEntity, async (badge) => {
    const updatedBadge = await BadgeService.updateBadge(badge);
    return updatedBadge;
});

// Delete badge
const deleteBadge = handlerRequest(deleteBadgeDto, badgeEntity, async (badge) => {
    const deletedBadge = await BadgeService.deleteBadge(badge);
    return deletedBadge;
});

module.exports = {
    getBadges,
    getBadge,
    createBadge,
    updateBadge,
    deleteBadge
};