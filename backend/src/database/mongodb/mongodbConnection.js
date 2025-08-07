const { MongoClient } = require('mongodb');
const config = require('../../config/mongo/config');

let client = null;
let db = null;

const connectDB = async () => {
  if (db) return db;

  try {
    client = new MongoClient(config.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await client.connect();
    db = client.db(config.dbName);

    console.info(`MongoDB connected to ${config.dbName}`);
    return db;
  } catch (err) {
    console.error(`Failed to connect to MongoDB: ${err.message}`);
    throw err;
  }
};

const getDb = () => {
  if (!db) {
    const msg = 'MongoDB not connected. Call connectDB() first.';
    console.error(msg);
    throw new Error(msg);
  }
  return db;
};

const closeDB = async () => {
  if (client) {
    await client.close();
    db = null;
    client = null;
    console.info('MongoDB connection closed');
  }
};

module.exports = {
  connectDB,
  getDb,
  closeDB
};
