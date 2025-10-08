import * as utilsMapper from '#utils/mapper.utils.js';
import * as mongoUtils from '#utils/mongo.utils.js';

/**
 * Handles database operations for reports
 */
class ReportRepository {
    constructor() {
        this.collectionName = 'reports';
    }

    /**
     * Gets the MongoDB collection for reports
     * @returns {Promise<Collection>} MongoDB collection
     */
    async getCollection() {
        return await mongoUtils.getMongoCollection(this.collectionName);
    }

    /**
     * Creates a new report in the database
     * @param {Object} reportData - Report data to create
     * @returns {Promise<Object>} Created report
     */
    async create(reportData) {
        const collection = await this.getCollection();
        return mongoUtils.createWithTimestamps(collection, reportData, utilsMapper.toDTO);
    }

    /**
     * Finds a report by ID
     * @param {string} id - Report ID
     * @returns {Promise<Object|null>} Found report or null if not found
     */
    async findById(id) {
        const collection = await this.getCollection();
        return mongoUtils.findById(collection, id, utilsMapper.toDTO);
    }

    /**
     * Finds reports by user ID
     * @param {string} userId - User ID
     * @param {Object} options - Query options
     * @param {number} [options.limit=10] - Maximum number of results
     * @param {number} [options.skip=0] - Number of results to skip
     * @returns {Promise<Array>} Array of reports
     */
    async findByUserId(userId, { limit = 10, skip = 0 } = {}) {
        const col = await this.getCollection();
        return mongoUtils.findMany(col, { user_id: userId }, { limit, skip }, utilsMapper.toDTO);
    }

    /**
     * Updates a report by ID
     * @param {string} id - Report ID
     * @param {Object} updateData - Data to update
     * @returns {Promise<Object|null>} Updated report or null if not found
     */
    async update(id, updateData) {
        const collection = await this.getCollection();
        return mongoUtils.updateById(collection, id, updateData, utilsMapper.toDTO);
    }

    /**
     * Deletes a report by ID
     * @param {string} id - Report ID
     * @returns {Promise<boolean>} True if deleted, false if not found
     */
    async delete(id) {
        const collection = await this.getCollection();
        return mongoUtils.deleteById(collection, id);
    }

}

export const reportRepository = new ReportRepository();