import 'dotenv/config';
import { connectDB, closeDB } from '../database/mongodb/mongodbConnection.js';

const initMongo = (async () => {
    try {
        const db = await connectDB();
        const collectionName = '__init__';

        const collections = await db.listCollections({ name: collectionName }).toArray();

        if (collections.length > 0) {
            await db.collection(collectionName).drop();
            console.info(`Old '${collectionName}' collection dropped`);
        }

        await db.createCollection(collectionName);
        console.info(`MongoDB connected to '${db.databaseName}' and '${collectionName}' collection created`);

        await db.collection(collectionName).insertOne({ initializedAt: new Date() });

        await closeDB();
        console.info('Connection closed');
        process.exit(0);
    } catch (error) {
        console.error(`MongoDB init failed: ${error.message}`);
        process.exit(1);
    }
});

initMongo();

