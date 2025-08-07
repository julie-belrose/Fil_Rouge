import { treatmentCenterRepository } from '@domains/treatmentCenter/treatmentCenter.repository.js';
import { toDTO } from '@utils/mapper.utils.js'; 

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
            return toDTO(treatmentCenter);
        } catch (error) {
            console.error(`Failed to get treatment center ${centerId}:`, error);
            throw new Error(`Failed to get treatment center: ${error.message}`);
        }
    }


    async createTreatmentCenter(treatmentCenter) {
        //todo
    }

    async updateTreatmentCenter(treatmentCenter) {
        //todo
    }

    async deleteTreatmentCenter(treatmentCenter) {
        //todo
    }

    async getTreatmentCenters() {
        //todo
    }
}

export const treatmentCenterService = new TreatmentCenterService();    