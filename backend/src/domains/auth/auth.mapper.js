const authEntity = require('./auth.entity');

class AuthMapper {
    /**
     * Convert the entity to persistence format
     */
    static toPersistence(auth) {
        return {
            email: auth.email,
            password_hash: auth.password_hash,
            role: auth.role,
            is_active: auth.is_active,
            created_at: auth.created_at
        };
    }

    /**
     * Convert the raw data to entity
     */
    static toDomain(rawData) {
        if (!rawData) return null;
        return authEntity(rawData);
    }

    /**
     * Convert the entity to dto for the responses API
     */
    static toDTO(auth) {
        const { password_hash, ...authData } = auth;
        return authData;
    }
}

module.exports = AuthMapper;