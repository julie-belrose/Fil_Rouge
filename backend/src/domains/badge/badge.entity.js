/**
 * Agent entity factory function
 * @param {Object} data - Raw agent data
 * @returns {Object} Normalized agent entity
 */
const badgeEntity = (data = {}) => ({
    name: data.name || null,
    description: data.description || null,
    image_url: data.image_url || null,
    created_at: data.created_at || new Date(),
    updated_at: data.updated_at || new Date(),

    isValid() {
        return this.name && this.description && this.image_url && this.created_at && this.updated_at;
    }
});

module.exports = badgeEntity;