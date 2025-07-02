/**
 * Mapper for the conversion between different layers of the application
 * Manages the transformation of data between database format and business format
 */
class AdminDataMapper {
    /**
     * Convert an entity to a format suitable for persistence in the database
     * @param {Object} adminEntity - The entity to convert
     * @returns {Object} The formatted data for the database
     */
    static convertToPersistenceFormat(adminEntity) {
        return {
            first_name: adminEntity.firstName,
            last_name: adminEntity.lastName,
            email: adminEntity.email,
            password: adminEntity.password,
            role: adminEntity.role || 'admin',
            permissions: JSON.stringify(adminEntity.permissions || [])
        };
    }

    /**
     * Convert the raw database data to a business entity
     * @param {Object} databaseRecord - The raw database record
     * @returns {Object} The normalized business entity
     */
    static convertToBusinessEntity(databaseRecord) {
        return {
            id: databaseRecord.id,
            firstName: databaseRecord.first_name,
            lastName: databaseRecord.last_name,
            email: databaseRecord.email,
            role: databaseRecord.role,
            permissions: JSON.parse(databaseRecord.permissions || '[]'),
            createdAt: databaseRecord.created_at,
            updatedAt: databaseRecord.updated_at
        };
    }

    /**
     * Convert an entity to a DTO (Data Transfer Object) for the API
     * @param {Object} adminEntity - The entity to convert
     * @returns {Object} The DTO ready to be returned by the API
     */
    static convertToDataTransferObject(adminEntity) {
        // Do not include sensitive data in the response
        const { password, ...adminData } = adminEntity;
        return adminData;
    }
}

module.exports = AdminDataMapper;