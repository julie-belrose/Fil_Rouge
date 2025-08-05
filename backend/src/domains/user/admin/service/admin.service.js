const AdminRepository = require('../repository/admin.repository');
const AdminDataMapper = require('./admin.mapper');

/**
 * Service of management of admins
 * Contains the business logic related to admins
 */
class AdminManagementService {
    /**
     * Creates a new admin
     * @param {Object} adminCreationData - The data of the admin to create
     * @returns {Promise<Object>} The created admin
     * @throws {Error} If the creation fails
     */
    async registerNewAdmin(adminCreationData) {
        try {
            const newAdmin = await AdminRepository.create(adminCreationData);
            const domainAdmin = AdminDataMapper.convertToBusinessEntity(newAdmin);
            return AdminDataMapper.convertToDataTransferObject(domainAdmin);
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
            const admins = await AdminRepository.findAll();
            return admins.map(admin => {
                const domainAdmin = AdminDataMapper.convertToBusinessEntity(admin);
                return AdminDataMapper.convertToDataTransferObject(domainAdmin);
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
            const admin = await AdminRepository.findById(adminId);
            if (!admin) {
                throw new Error('Admin not found');
            }
            const domainAdmin = AdminDataMapper.convertToBusinessEntity(admin);
            return AdminDataMapper.convertToDataTransferObject(domainAdmin);
        } catch (error) {
            throw new Error(`Error retrieving admin: ${error.message}`);
        }
    }
}

module.exports = new AdminManagementService();