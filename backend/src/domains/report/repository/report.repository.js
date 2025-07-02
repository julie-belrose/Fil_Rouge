const { getDb } = require('../../database/mongodb');
const ReportMapper = require('../mapper/report.mapper');

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
        const db = await getDb();
        return db.collection(this.collectionName);
    }

    /**
     * Creates a new report in the database
     * @param {Object} reportData - Report data to create
     * @returns {Promise<Object>} Created report
     */
    async create(reportData) {
        const collection = await this.getCollection();
        const now = new Date();
        
        const report = {
            ...ReportMapper.toPersistence(reportData),
            created_at: now,
            updated_at: now
        };
        
        const result = await collection.insertOne(report);
        return this.findById(result.insertedId);
    }

    /**
     * Finds a report by ID
     * @param {string} id - Report ID
     * @returns {Promise<Object|null>} Found report or null if not found
     */
    async findById(id) {
        const collection = await this.getCollection();
        const report = await collection.findOne({ _id: id });
        return ReportMapper.toDomain(report);
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
        const collection = await this.getCollection();
        const cursor = await collection
            .find({ user_id: userId })
            .sort({ created_at: -1 })
            .skip(skip)
            .limit(limit);
        
        const reports = await cursor.toArray();
        return reports.map(ReportMapper.toDomain);
    }

    /**
     * Updates a report by ID
     * @param {string} id - Report ID
     * @param {Object} updateData - Data to update
     * @returns {Promise<Object|null>} Updated report or null if not found
     */
    async update(id, updateData) {
        const collection = await this.getCollection();
        const now = new Date();
        
        const result = await collection.findOneAndUpdate(
            { _id: id },
            { 
                $set: { 
                    ...updateData,
                    updated_at: now 
                } 
            },
            { returnDocument: 'after' }
        );
        
        return ReportMapper.toDomain(result.value);
    }

    /**
     * Deletes a report by ID
     * @param {string} id - Report ID
     * @returns {Promise<boolean>} True if deleted, false if not found
     */
    async delete(id) {
        const collection = await this.getCollection();
        const result = await collection.deleteOne({ _id: id });
        return result.deletedCount > 0;
    }
}

module.exports = new ReportRepository();