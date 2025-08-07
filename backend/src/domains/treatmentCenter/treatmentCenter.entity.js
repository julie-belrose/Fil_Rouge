/**
 * Treatment Center entity factory
 * @param {Object} data - Raw treatment center data
 * @returns {Object} Treatment Center entity
 */
const treatmentCenterEntity = (data = {}) => {
    const now = new Date();
    
    return {
        _id: data._id || null,
        center_id: data.center_id || null,
        name: data.name || '',
        zone_covered: data.zone_covered || '',
        location: data.location || { type: 'Point', coordinates: [0, 0] },
        collection_calendar: data.collection_calendar || [],
        notes: data.notes || null,
        created_at: data.created_at || now,
        updated_at: now,

        /**
         * Validates if the treatment center has all required fields
         * @returns {boolean} True if valid, false otherwise
         */
        isValid() {
            return this.center_id !== null && 
                   this.name && 
                   this.zone_covered && 
                   this.location?.coordinates?.length === 2;
        }
    };
};

module.exports = treatmentCenterEntity;