const badgeRepository = require('./repository/badge.repository');
const BadgeMapper = require('./mapper/badge.mapper');

class BadgeService {
    /**
     * Creates a new badge
     * @param {Object} badgeData - Badge data
     * @returns {Promise<Object>} Created badge
     */
    async createBadge(badgeData) {
        try {
            // Check if badge already exists for this user
            const existingBadge = await badgeRepository.findByUserId(badgeData.user_id);
            if (existingBadge) {
                throw new Error('A badge already exists for this user');
            }

            const newBadge = await badgeRepository.create(badgeData);
            return BadgeMapper.toDTO(newBadge);
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
            const badge = await badgeRepository.findByUserId(userId);
            if (!badge) {
                throw new Error('Badge not found');
            }
            return BadgeMapper.toDTO(badge);
        } catch (error) {
            console.error(`Failed to get badge ${userId}:`, error);
            throw new Error(`Failed to get badge: ${error.message}`);
        }
    }
}

module.exports = new BadgeService();