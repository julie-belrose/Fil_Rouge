import { badgeRepository } from '#domains/badge/badge.repository.js';
import { badgeMapper } from '#domains/badge/badge.mapper.js';

class BadgeService {
    /**
     * Creates a new badge
     * @param {Object} badgeData - Badge data
     * @returns {Promise<Object>} Created badge
     */
    async createBadge(badgeData) {
        try {
            // Check if badge already exists for this user
            const existingBadge = await badgeRepository.findById(badgeData.user_id);
            if (existingBadge) {
                throw new Error('A badge already exists for this user');
            }

            const newBadge = await badgeRepository.create(badgeData);
            return badgeMapper.toDTO(newBadge);
        } catch (error) {
            console.error('Failed to create badge:', error);
            throw new Error(`Failed to create badge: ${error.message}`);
        }
    }

    /**
     * Gets a badge by user ID
     * @param {number} userId - User ID
     * @returns {Promise<Object>} Badge data
     */
    async getBadgeByUserId(userId) {
        try {
            const badge = await badgeRepository.findById(userId);
            if (!badge) {
                throw new Error('Badge not found');
            }
            return badgeMapper.toDTO(badge);
        } catch (error) {
            console.error(`Failed to get badge ${userId}:`, error);
            throw new Error(`Failed to get badge: ${error.message}`);
        }
    }

    /**
     * Updates a badge by user ID
     * @param {Object} badgeData - Badge data
     * @returns {Promise<Object>} Updated badge
     */
    async updateBadge(badgeData) {
        //todo
    }

    /**
     * Deletes a badge by user ID
     * @param {number} userId - User ID
     * @returns {Promise<Object>} Deleted badge
     */
    async deleteBadge(userId) {
        //todo
    }
}

export const badgeService = new BadgeService();