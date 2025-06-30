/**
 * User Entity
 * 
 * @description
 * Represents the structure of user data in the application.
 * This function creates a normalized user object with default values.
 * 
 * @example
 * // Create a new user
 * const newUser = userEntity({
 *   name: 'John Doe',
 *   email: 'john@example.com'
 * });
 * 
 * // From a DTO
 * const userData = createUserDto(req.body);
 * const user = userEntity(userData);
 * 
 * @param {Object} data - The user data (DTO)
 * @param {string} [data.id=null] - The unique identifier of the user
 * @param {string} [data.name=''] - The name of the user
 * @param {string} [data.email=''] - The email of the user
 * @param {string} [data.role='user'] - The role of the user (default: 'user')
 * @param {Date} [data.createdAt=new Date()] - Creation date
 * @param {Date} [data.updatedAt=new Date()] - Update date
 * 
 * @returns {Object} The normalized user object
 */
const userEntity = (data = {}) => ({
    id: data.id || null,
    name: data.name || '',
    email: data.email || '',
    role: data.role || 'user',
    createdAt: data.createdAt || new Date(),
    updatedAt: data.updatedAt || new Date()
});

module.exports = userEntity;