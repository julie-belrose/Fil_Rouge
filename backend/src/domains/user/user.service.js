const userRepository = require('./user.repository');
const UserMapper = require('./user.mapper');

/**
 * Handles user business logic
 */
class UserService {
    /**
     * Creates a new user with validation
     * @param {Object} userData - User data to create
     * @returns {Promise<Object>} Created user DTO
     * @throws {Error} If user creation fails
     */
    async createUser(userData) {
        try {
            // Check if user already exists with this auth_id
            const existingUser = await userRepository.findByAuthId(userData.auth_id);
            if (existingUser) {
                throw new Error('User already exists with this auth_id');
            }

            // Create new user
            const newUser = await userRepository.create(userData);
            return UserMapper.toDTO(newUser);
        } catch (error) {
            console.error('User creation failed:', error);
            throw new Error(`Failed to create user: ${error.message}`);
        }
    }
}

module.exports = new UserService();