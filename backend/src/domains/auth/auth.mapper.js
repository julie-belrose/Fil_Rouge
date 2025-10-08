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
}

export const authMapper = new AuthMapper();