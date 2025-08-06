import { getDb } from '../../database/mongodb';

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

export default {
    getMongoCollection
};
