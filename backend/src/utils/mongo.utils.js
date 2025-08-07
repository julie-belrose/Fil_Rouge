import { getDb } from '@database/mongodb/mongodbConnection.js';
import { ObjectId } from 'mongodb';

/**
 * Gets a MongoDB collection by name
 * @param {string} collectionName - The name of the collection
 * @returns {Promise<Collection>} MongoDB collection
 * @throws {Error} If connection is not established
 */
export const getMongoCollection = async (collectionName) => {
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
export const toObjectId = (id) => {
    return ObjectId.isValid(id) ? new ObjectId(id) : null;
};

/**
 * Generic find by ID + mapping
 */
export const findById = async (collection, id, options = {}, mapper = (x) => x) => {
    const objectId = toObjectId(id);
    if (!objectId) return null;
    const result = await collection.findOne({ _id: objectId }, options);
    return result ? mapper(result) : null;
};

/**
 * Find many with query + pagination
 */
export const findMany = async (collection, query = {}, { limit = 10, skip = 0 } = {}, mapper = (x) => x) => {
    const cursor = collection.find(query).skip(skip).limit(limit);
    const docs = await cursor.toArray();
    return docs.map(mapper);
};

/**
 * Generic delete by ID
 */
export const deleteById = async (collection, id) => {
    const objectId = toObjectId(id);
    if (!objectId) return false;
    const result = await collection.deleteOne({ _id: objectId });
    return result.deletedCount > 0;
};

/**
 * Generic update by ID + mapping
 */
export const updateById = async (collection, id, updateData, mapper = (x) => x) => {
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
export const createWithTimestamps = async (collection, data, mapper = (x) => x) => {
    if (!collection || typeof collection.insertOne !== 'function') {
        throw new Error('Invalid MongoDB collection');
    }

    const enriched = setTimestamps(data);

    const result = await collection.insertOne(enriched);
    if (!result.insertedId) {
        throw new Error('Failed to insert document');
    }

    const inserted = await collection.findOne({ _id: result.insertedId });
    return inserted ? mapper(inserted) : null;
};
