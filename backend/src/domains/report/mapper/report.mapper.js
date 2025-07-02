const reportEntity = require('../entity/report.entity');

/**
 * Mapper for converting between different report data representations
 */
class ReportMapper {
    /**
     * Converts domain entity to persistence format (MongoDB)
     * @param {Object} report - Report domain entity
     * @returns {Object} Data ready for MongoDB
     */
    static toPersistence(report) {
        const persistence = { ...report };

        // Remove MongoDB's _id if it's null to allow MongoDB to generate it
        if (persistence._id === null) {
            delete persistence._id;
        }

        // Ensure location is properly formatted for MongoDB
        if (persistence.location) {
            persistence.location = {
                type: 'Point',
                coordinates: Array.isArray(persistence.location.coordinates)
                    ? persistence.location.coordinates
                    : [0, 0]
            };
        }

        return persistence;
    }

    /**
     * Converts raw database data to domain entity
     * @param {Object|null} rawData - Raw data from MongoDB
     * @returns {Object|null} Report domain entity or null if input is falsy
     */
    static toDomain(rawData) {
        if (!rawData) return null;

        // Convert MongoDB's _id to string for consistency
        const domain = { ...rawData };
        if (domain._id) {
            domain._id = domain._id.toString();
        }

        return reportEntity(domain);
    }

    /**
     * Converts domain entity to DTO for API responses
     * @param {Object} report - Report domain entity
     * @returns {Object} Safe report data for API responses
     */
    static toDTO(report) {
        if (!report) return null;

        // Create a shallow copy and remove internal fields
        const { _id, user_id, ...dto } = report;

        // Add id field (using _id) for the API response
        return {
            id: _id,
            ...dto
        };
    }
}

module.exports = ReportMapper;