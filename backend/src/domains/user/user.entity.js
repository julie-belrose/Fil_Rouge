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
 *   auth_id: 1,
 *   pseudo: 'John Doe',
 *   first_name: 'John',
 *   last_name: 'Doe',
 *   district: 'District',
 *   loyalty_points: 0
 * });
 * 
 * // From a DTO
 * const userData = createUserDto(req.body);
 * const user = userEntity(userData);
 * 
 * @param {Object} data - The user data (DTO)
 * @param {string} [data.id=null] - The unique identifier of the user
 * @param {string} [data.auth_id=null] - The authentication ID of the user
 * @param {string} [data.pseudo=null] - The pseudo of the user
 * @param {string} [data.first_name=null] - The first name of the user
 * @param {string} [data.last_name=null] - The last name of the user
 * @param {string} [data.district=null] - The district of the user
 * @param {number} [data.loyalty_points=0] - The loyalty points of the user
 * @param {Date} [data.created_at=new Date()] - Creation date
 * 
 * @returns {Object} The normalized user object
 */
const userEntity = (data = {}) => ({
    id: data.id || null,
    auth_id: data.auth_id || null,
    pseudo: data.pseudo || null,
    first_name: data.first_name || null,
    last_name: data.last_name || null,
    district: data.district || null,
    loyalty_points: data.loyalty_points !== undefined ? data.loyalty_points : 0,
    created_at: data.created_at || new Date().toISOString()
});

module.exports = userEntity;