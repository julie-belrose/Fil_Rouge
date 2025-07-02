/**
 * Entity Authentication
 * Represents authentication information of a user
 * @param {Object} data - Raw data of authentication
 * @returns {Object} Normalized authentication entity
 */
const authEntity = (data = {}) => ({
    id: data.id || null,
    email: data.email || '',
    password_hash: data.password_hash || '',
    role: data.role || 'user', // Value by default
    is_active: data.is_active !== undefined ? data.is_active : true,
    created_at: data.created_at || new Date().toISOString()
});

module.exports = authEntity;