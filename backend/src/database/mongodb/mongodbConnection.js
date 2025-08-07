import { MongoClient } from 'mongodb';
import { configMongoDB } from '@config/mongodb/mongodbConfig.js';

let client = null;
let db = null;

export const connectDB = async () => {
  if (db) return db;

  try {
    client = new MongoClient(configMongoDB.url);

    await client.connect();
    db = client.db(configMongoDB.dbName);

    console.info(`MongoDB connected to ${configMongoDB.dbName}`);
    return db;
  } catch (err) {
    console.error(`Failed to connect to MongoDB: ${err.message}`);
    throw err;
  }
};

export const getDb = () => {
  if (!db) {
    const msg = 'MongoDB not connected. Call connectDB() first.';
    console.error(msg);
    throw new Error(msg);
  }
  return db;
};

export const closeDB = async () => {
  if (client) {
    await client.close();
    db = null;
    client = null;
    console.info('MongoDB connection closed');
  }
};

export const testConnectionMongoDB = async () => {
  try {
    const db = await connectDB();

    console.info(`MongoDB test OK — Connected to '${db.databaseName}'`);

    await closeDB();
    console.info('MongoDB connection closed');
    process.exit(0);
  } catch (err) {
    console.error(`MongoDB test failed: ${err.message}`);
    process.exit(1);
  }
};
