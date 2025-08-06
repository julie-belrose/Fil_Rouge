const adminRequestRepository = require('./repository/adminRequest.repository');
const AdminRequestMapper = require('./mapper/adminRequest.mapper');

class AdminRequestService {
    /**
     * Creates a new adminRequest
     * @param {Object} admin_requestData - Admin_request data
     * @returns {Promise<Object>} Created adminRequest
     */
    async createAdminRequest(admin_requestData) {
        try {
            // Check if adminRequest already exists for this user
            const existingAdminRequest = await adminRequestRepository.findById(admin_requestData.id);
            if (existingAdminRequest) {
                throw new Error('An adminRequest already exists for this user');
            }

            const newAdminRequest = await adminRequestRepository.create(admin_requestData);
            return AdminRequestMapper.toDTO(newAdminRequest);
        } catch (error) {
            console.error('Failed to create adminRequest:', error);
            throw new Error(`Failed to create admin_request: ${error.message}`);
        }
    }

    /**
     * Gets a adminRequest by ID
     * @param {number} id - Admin_request ID
     * @returns {Promise<Object>} Admin_request data
     */
    async getAdminRequestById(id) {
        try {
            const admin_request = await adminRequestRepository.findById(id);
            if (!admin_request) {
                throw new Error('Admin_request not found');
            }
            return AdminRequestMapper.toDTO(admin_request);
        } catch (error) {
            console.error(`Failed to get admin_request ${id}:`, error);
            throw new Error(`Failed to get admin_request: ${error.message}`);
        }
    }

    /**
     * Creates a new adminRequest
     * @param {number} userId - User ID
     * @returns {Object} Admin_request data
     */
    async createAdminRequest(userId) {
        const token = generateUUID();
        const hashedToken = hashSHA256(token); //todo: example

        const now = getCurrentDate();
        const expires = addHours(now, 24);

        return {
            hashed_token: hashedToken,
            related_user_id: userId,
            status: 'pending',
            created_at: now,
            expires_at: expires
        };
    }

}

module.exports = new AdminRequestService();