import 'dotenv/config';
import { MongoClient } from 'mongodb';
import config from '../config/mongodb/mongodbConfig.js';

const initMongo = async () => {
    let client;

    try {
        client = new MongoClient(config.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        await client.connect();
        const db = client.db(config.dbName);

        const admin = db.admin();
        await admin.ping();

        console.info(`MongoDB '${config.dbName}' is accessible (env: ${process.env.NODE_ENV || 'development'})`);
        await client.close();
        process.exit(0);
    } catch (err) {
        console.error(`MongoDB init failed: ${err.message}`);
        if (client) await client.close();
        process.exit(1);
    }
};

initMongo();

