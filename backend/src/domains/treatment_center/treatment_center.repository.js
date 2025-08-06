const { getDb } = require('../../database/mongodb');
const TreatmentCenterMapper = require('./treatment_center.mapper');

/**
 * Handles database operations for treatment centers
 */
class TreatmentCenterRepository {
    constructor() {
        this.collectionName = 'treatment_centers';
    }

    /**
     * Gets the MongoDB collection for treatment centers
     * @returns {Promise<Collection>} MongoDB collection
     */
    async getCollection() {
        const db = await getDb();
        return db.collection(this.collectionName);
    }

    /**
     * Finds a treatment center by ID
     * @param {string} id - Treatment center ID
     * @returns {Promise<Object|null>} Found treatment center or null if not found
     */
    async findById(id) {
        const collection = await this.getCollection();
        const treatmentCenter = await collection.findOne({ _id: id });
        return TreatmentCenterMapper.toDomain(treatmentCenter);
    }
}

module.exports = new TreatmentCenterRepository();