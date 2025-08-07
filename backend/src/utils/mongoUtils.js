import { getDb } from '../../database/mongodb';
import { ObjectId } from 'mongodb';
import repositoryUtils from './repositoryUtils';

/**
 * Gets a MongoDB collection by name
 * @param {string} collectionName - The name of the collection
 * @returns {Promise<Collection>} MongoDB collection
 * @throws {Error} If connection is not established
 */
const getMongoCollection = async (collectionName) => {
    const db = await getDb();
    if (!db) {
        throw new Error('MongoDB connection is not established.');
    }
    return db.collection(collectionName);
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

/**
 * Inserts a document with created_at and updated_at timestamps
 * 
 * @param {Collection} collection - MongoDB collection
 * @param {Object} data - Raw data to insert
 * @param {Function} [mapper] - Optional mapper function (e.g. toDTO)
 * @returns {Promise<Object>} - Inserted and mapped document
 */
const createWithTimestamps = async (collection, data, mapper = (x) => x) => {
    if (!collection || typeof collection.insertOne !== 'function') {
        throw new Error('Invalid MongoDB collection');
    }

    const enriched = repositoryUtils.setTimestamps(data);

    const result = await collection.insertOne(enriched);
    if (!result.insertedId) {
        throw new Error('Failed to insert document');
    }

    const inserted = await collection.findOne({ _id: result.insertedId });
    return inserted ? mapper(inserted) : null;
};

export default {
    getMongoCollection,
    toObjectId,
    findById,
    deleteById,
    updateById,
    createWithTimestamps
};
