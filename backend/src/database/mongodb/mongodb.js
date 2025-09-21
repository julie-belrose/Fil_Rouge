const { MongoClient } = require('mongodb');

let db = null;

const connectDB = async () => {
  if (db) return db;

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  await client.connect();
  db = client.db();
  return db;
};

const getDb = () => {
  if (!db) {
    throw new Error('MongoDB connection has not been established.');
  }
  return db;
};

module.exports = {
  connectDB,
  getDb
};
