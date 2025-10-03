const reportEntity = require('./report.entity');

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
}

module.exports = ReportMapper;