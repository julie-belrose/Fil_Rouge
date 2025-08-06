const treatmentCenterEntity = require('../entity/treatment-center.entity');

class TreatmentCenterMapper {
    /**
     * Converts domain entity to persistence format
     * @param {Object} treatmentCenter - Treatment center domain entity
     * @returns {Object} Persistence format
     */
    static toPersistence(treatmentCenter) {
        return {
            center_id: treatmentCenter.center_id,
            name: treatmentCenter.name,
            zone_covered: treatmentCenter.zone_covered,
            location: treatmentCenter.location,
            collection_calendar: treatmentCenter.collection_calendar,
            notes: treatmentCenter.notes,
            created_at: treatmentCenter.created_at,
            updated_at: treatmentCenter.updated_at
        };
    }

    /**
     * Converts raw data to domain entity
     * @param {Object} rawData - Raw data from database
     * @returns {Object} Treatment center domain entity
     */
    static toDomain(rawData) {
        if (!rawData) return null;
        return treatmentCenterEntity(rawData);
    }

    /**
     * Converts domain entity to DTO
     * @param {Object} treatmentCenter - Treatment center domain entity
     * @returns {Object} DTO
     */
    static toDTO(treatmentCenter) {
        if (!treatmentCenter) return null;
        
        const { _id, ...dto } = treatmentCenter;
        return {
            id: _id,
            ...dto
        };
    }
}

module.exports = TreatmentCenterMapper;