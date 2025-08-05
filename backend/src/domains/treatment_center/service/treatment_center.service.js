const treatmentCenterRepository = require('./repository/treatment_center.repository');
const TreatmentCenterMapper = require('./mapper/treatment_center.mapper');

class TreatmentCenterService {
    /**
     * Gets a treatment center by center ID
     * @param {number} centerId - Center ID
     * @returns {Promise<Object>} Treatment center data
     */
    async getTreatmentCenterByCenterId(centerId) {
        try {
            const treatmentCenter = await treatmentCenterRepository.findByCenterId(centerId);
            if (!treatmentCenter) {
                throw new Error('Treatment center not found');
            }
            return TreatmentCenterMapper.toDTO(treatmentCenter);
        } catch (error) {
            console.error(`Failed to get treatment center ${centerId}:`, error);
            throw new Error(`Failed to get treatment center: ${error.message}`);
        }
    }
}

module.exports = new TreatmentCenterService();    