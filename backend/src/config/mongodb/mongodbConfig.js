import * as dotenv from 'dotenv';
dotenv.config();
import { getEnvVar } from '@utils/env.utils.js';

export const configMongoDB = {
    url: getEnvVar('MONGO_URL'),
    dbName: getEnvVar('MONGO_DB'),
};

if (!configMongoDB?.url || !configMongoDB?.dbName) {
    throw new Error('MongoDB configuration is missing');
}