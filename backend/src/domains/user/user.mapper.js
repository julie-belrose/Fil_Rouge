/**
 * Mapper for converting between different user data representations
 */
class UserMapper {
    /**
     * Converts domain entity to persistence format
     * @param {Object} user - User domain entity
     * @returns {Object} Data ready for database storage
     */
    static toPersistence(user) {
        return {
            user_id: user.user_id,
            pseudo: user.pseudo,
            district: user.district,
            loyalty_points: user.loyalty_points
        };
    }
}

export const userMapper = new UserMapper();