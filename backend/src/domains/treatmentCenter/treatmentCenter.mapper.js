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
}

export const treatmentCenterMapper = new TreatmentCenterMapper();