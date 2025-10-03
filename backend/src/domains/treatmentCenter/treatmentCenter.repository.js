const mongoUtils = require('../utils/mongoUtils');
const utilsMapper = require('../utils/mapperUtils');

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
        return await mongoUtils.getMongoCollection(this.collectionName);
    }

    /**
     * Finds a treatment center by ID
     * @param {string} id - Treatment center ID
     * @returns {Promise<Object|null>} Found treatment center or null if not found
     */
    async findById(id) {
        const collection = await this.getCollection();
        return mongoUtils.findById(collection, id, utilsMapper.toDTO);
    }
}

module.exports = new TreatmentCenterRepository();