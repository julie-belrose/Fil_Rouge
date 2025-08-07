import * as badgeDto from '@domains/badge/badge.dto.js';
import { badgeEntity } from '@domains/badge/badge.entity.js';
import { badgeService } from '@domains/badge/badge.service.js';
import handlerRequest from '@utils/handlerRequest.js';
import { handlerBody } from '@utils/handlerBody.js';

// Get all badges
export const getBadges = handlerBody(async (req, res) => {
    return await badgeService.getBadges();
});

// Get single badge
export const getBadge = handlerBody(async (req, res) => {
    const badge = await badgeService.getBadgeByUserId(req.params.id);
    return badge;
});

/**
 * Create a new badge
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const createBadge = handlerRequest(badgeDto.createBadgeDTO, badgeEntity, async (badge) => {
    const newBadge = await badgeService.createBadge(badge);
    return newBadge;
});

// Update badge
export const updateBadge = handlerRequest(badgeDto.updateBadgeDTO, badgeEntity, async (badge) => {
    const updatedBadge = await badgeService.updateBadge(badge);
    return updatedBadge;
});

// Delete badge
export const deleteBadge = handlerRequest(badgeDto.deleteBadgeDTO, badgeEntity, async (badge) => {
    const deletedBadge = await badgeService.deleteBadge(badge);
    return deletedBadge;
});