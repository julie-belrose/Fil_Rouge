import 'module-alias/register';
import 'dotenv/config';
import { MongoClient } from 'mongodb';
import { configMongoDB } from '@config/mongodb/mongodbConfig.js'; 

export const initMongo = async () => {
    const env = process.env.NODE_ENV || 'dev';
    let client;
    try {
        const { url, dbName } = configMongoDB;

        if (!url || !dbName) {
            throw new Error(`Missing Mongo config: url='${url}' dbName='${dbName}'`);
        }

        client = new MongoClient(url);
        await client.connect();

        const db = client.db(dbName);
        await db.command({ ping: 1 });

        console.info(
            `MongoDB '${dbName}' is accessible (env: ${env})`
        );
    } catch (err) {
        console.error(`MongoDB init failed: ${err.message}`);
        process.exitCode = 1;
    } finally {
        if (client) {
            await client.close();
            console.info('MongoDB connection closed');
        }
    }
};

initMongo();