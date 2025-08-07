import 'dotenv/config';
import mysql from 'mysql2/promise';

const env = process.env.NODE_ENV || 'development';
const database = {
    development: process.env.DB_NAME,
    test: process.env.TEST_DB_NAME,
    production: process.env.PROD_DB_NAME
}[env];

const config = {
    host: process.env[`${env.toUpperCase()}_DB_HOST`],
    port: process.env[`${env.toUpperCase()}_DB_PORT`] || 3306,
    user: process.env[`${env.toUpperCase()}_DB_USER`],
    password: process.env[`${env.toUpperCase()}_DB_PASSWORD`],
    database
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
