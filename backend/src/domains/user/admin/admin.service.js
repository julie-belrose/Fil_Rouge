import { adminRepository } from './admin.repository';
import { toDTO, fromDTO } from '@utils/mapper.utils.js'; 

/**
 * Service of management of admins
 * Contains the business logic related to admins
 */
class AdminService {
    /**
     * Creates a new admin
     * @param {Object} adminCreationData - The data of the admin to create
     * @returns {Promise<Object>} The created admin
     * @throws {Error} If the creation fails
     */
    async registerNewAdmin(adminCreationData) {
        try {
            const newAdmin = await adminRepository.create(adminCreationData);
            const domainAdmin = fromDTO(newAdmin, adminEntity);
            return toDTO(domainAdmin);
        } catch (error) {
            throw new Error(`Error creating admin: ${error.message}`);
        }
    }

    /**
     * Retrieves all admins
     * @returns {Promise<Array>} The list of admins
     * @throws {Error} If the retrieval fails
     */
    async retrieveAllAdministrators() {
        try {
            const admins = await adminRepository.findAll();
            return admins.map(admin => {
                const domainAdmin = fromDTO(admin, adminEntity);
                return toDTO(domainAdmin);
            });
        } catch (error) {
            throw new Error(`Error retrieving admins: ${error.message}`);
        }
    }

    /**
     * Retrieves an admin by its ID
     * @param {number} adminId - The ID of the admin to retrieve
     * @returns {Promise<Object>} The retrieved admin
     * @throws {Error} If the admin is not found or in case of error
     */
    async fetchAdminById(adminId) {
        try {
            const admin = await adminRepository.findById(adminId);
            if (!admin) {
                throw new Error('Admin not found');
            }
            const domainAdmin = fromDTO(admin, adminEntity);
            return toDTO(domainAdmin);
        } catch (error) {
            throw new Error(`Error retrieving admin: ${error.message}`);
        }
    }
}

export const adminService = new AdminService();