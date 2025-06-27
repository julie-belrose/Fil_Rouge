/**
 * Admin_request entity factory function
 * @param {Object} data - Raw adminRequest data
 * @returns {Object} Normalized adminRequest entity
 */
export const adminRequestEntity = (data = {}) => ({
    hashed_token: data.hashed_token || null,
    related_user_id: data.related_user_id || null,
    status: data.status || null,
    created_at: data.created_at || new Date(),
    expires_at: data.expires_at || new Date(),

    isValid() {
        return this.hashed_token && this.related_user_id && this.status && this.created_at && this.expires_at;
    }
});