/**
 * Admin entity factory
 * @param {Object} data - Raw admin data
 * @returns {Object} Admin entity
 */
export const adminEntity = (data = {}) => {
    return {
        user_id: data.user_id || null,
        center_id: data.center_id || null,
        created_at: data.created_at || new Date(),
        updated_at: data.updated_at || new Date(),

        /**
         * Validates if the admin has all required fields
         * @returns {boolean} True if valid, false otherwise
         */
        isValid() {
            return this.user_id !== null && this.center_id !== null;
        }
    };
};