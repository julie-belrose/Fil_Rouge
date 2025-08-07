import { adminMapper } from '@domains/user/admin/admin.mapper.js';
import * as utilsMapper from '@utils/mapper.utils.js';
import { adminEntity } from '@domains/user/admin/admin.entity.js';
import { createWithTimestampsSQL, findManyByField, findById } from '@utils/mysql.utils.js';

class AdminRepository {
    constructor() {
        this.tableName = 'admins';
    }

    /**
     * Creates a new admin
     * @param {Object} adminData - Admin data
     * @returns {Promise<Object>} Created admin
     */
    async create(adminData) {
        const [id] = await createWithTimestampsSQL(this.tableName, adminMapper.toPersistence(adminData));
        return await findById(this.tableName, id, admin => utilsMapper.toDTO(admin, adminEntity));
    }


    /**
     * Finds admins by center ID
     * @param {number} centerId - Center ID
     * @returns {Promise<Array>} List of admins
     */
    async findByCenterId(centerId) {
        return await findManyByField(this.tableName, 'center_id', centerId, admin => utilsMapper.toDTO(admin, adminEntity));
    }
}

export const adminRepository = new AdminRepository();