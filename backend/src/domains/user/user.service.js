import { userRepository } from '#domains/user/user.repository.js';
import * as utilsMapper from '#utils/mapper.utils.js'; 
/**
 * Handles user business logic
 */
class UserService {
    /*
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
            return utilsMapper.toDTO(newUser);
        } catch (error) {
            console.error('User creation failed:', error);
            throw new Error(`Failed to create user: ${error.message}`);
        }
    }

    async updateUser(id, userData) {
        //todo
    }

    async deleteUser(id) {
        //todo
    }

    async getUsers() {
        try {
            const users = await userRepository.findAll();
            console.log('get all users', users);
            return users.map(user => utilsMapper.toDTO(user));
        } catch (error) {
            console.error('Failed to get users:', error);
            throw new Error(`Failed to get users: ${error.message}`);
        }
    }

    async getUserById(id) {
        //todo
    }
}

export const userService = new UserService();