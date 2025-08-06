import { ObjectId } from 'mongodb';

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

/**
 * Transform string ID into ObjectId safely
 * @param {string} id - String id to convert
 * @returns {ObjectId|null}
 */
const toObjectId = (id) => {
    return ObjectId.isValid(id) ? new ObjectId(id) : null;
};

/**
 * Generic find by ID + mapping
 */
const findById = async (collection, id, mapper = (x) => x) => {
    const objectId = toObjectId(id);
    if (!objectId) return null;
    const result = await collection.findOne({ _id: objectId });
    return result ? mapper(result) : null;
};

/**
 * Generic delete by ID
 */
const deleteById = async (collection, id) => {
    const objectId = toObjectId(id);
    if (!objectId) return false;
    const result = await collection.deleteOne({ _id: objectId });
    return result.deletedCount > 0;
};

/**
 * Generic update by ID + mapping
 */
const updateById = async (collection, id, updateData, mapper = (x) => x) => {
    const objectId = toObjectId(id);
    if (!objectId) return null;
    const now = new Date();

    const result = await collection.findOneAndUpdate(
        { _id: objectId },
        { $set: { ...updateData, updated_at: now } },
        { returnDocument: 'after' }
    );

    return result.value ? mapper(result.value) : null;
};

export default {
    setTimestamps,
    toObjectId,
    findById,
    deleteById,
    updateById
};
