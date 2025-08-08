import 'dotenv/config';

const env = process.env.NODE_ENV || 'development';

const mongoConfig = {
    development: {
        url: process.env.MONGO_DEV_URL,
        dbName: process.env.MONGO_DEV_DB
    },
    test: {
        url: process.env.MONGO_TEST_URL,
        dbName: process.env.MONGO_TEST_DB
    },
    production: {
        url: process.env.MONGO_PROD_URL,
        dbName: process.env.MONGO_PROD_DB
    }
};

const configMongoDB = mongoConfig[env];

if (!configMongoDB?.url || !configMongoDB?.dbName) {
    throw new Error(`MongoDB configuration is missing for environment: ${env}`);
}

export {configMongoDB};
