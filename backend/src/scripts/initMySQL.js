import * as dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2/promise';
import { getEnvVar } from '#utils/env.utils.js';

const env = process.env.NODE_ENV || 'dev';

const config = {
    host: getEnvVar('DB_HOST'),
    port: Number(getEnvVar('DB_PORT')) || 3306,
    user: getEnvVar('DB_USER'),
    password: getEnvVar('DB_PASSWORD') ?? '',
    database: getEnvVar('DB_NAME') || '',
};


const initMySQL = async () => {
    try {
        const connection = await mysql.createConnection(config);
        await connection.query('SELECT 1');
        console.info(`MySQL '${config.database}' is accessible (env: ${env})`);
        await connection.end();
        process.exit(0);
    } catch (err) {
        console.error(`MySQL init failed: ${err.message}`);
        process.exit(1);
    }
};

initMySQL();
