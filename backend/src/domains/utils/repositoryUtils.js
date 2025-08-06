/**
 * Adds created_at and updated_at timestamps to the given object
 * @param {Object} data - The data to add timestamps to
 * @returns {Object} Data with timestamps
 */
const setTimestamps = (data) => {
    const now = new Date();
    return {
        ...data,
        created_at: now,
        updated_at: now
    };
};

export default {
    setTimestamps,
};
