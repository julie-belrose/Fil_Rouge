require('dotenv').config();

const mysqlConfig = {
    development: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME || process.env.TEST_DB_NAME,
        port: Number(process.env.DB_PORT) || 3306,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        debug: process.env.NODE_ENV === 'development',
        timezone: '+00:00',
        charset: 'utf8mb4_unicode_ci',
        // SSL configuration - The data is encrypted end-to-end
        ssl: process.env.DB_SSL === 'true' ? {
            rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED !== 'false'
        } : false
    },
    test: {
        host: process.env.TEST_DB_HOST,
        user: process.env.TEST_DB_USER,
        password: process.env.TEST_DB_PASSWORD,
        database: process.env.TEST_DB_NAME,
        port: Number(process.env.TEST_DB_PORT) || 3306,
        waitForConnections: true,
        connectionLimit: 5,
        queueLimit: 0,
        timezone: '+00:00',
        charset: 'utf8mb4_unicode_ci',
        debug: process.env.NODE_ENV === 'test',
    },
    production: {
        host: process.env.PROD_DB_HOST,
        user: process.env.PROD_DB_USER,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME,
        port: Number(process.env.PROD_DB_PORT) || 3306,
        waitForConnections: true,
        connectionLimit: 20,
        queueLimit: 0,
        ssl: process.env.DB_SSL === 'true' ? {
            rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED !== 'false'
        } : false,
        timezone: '+00:00',
        charset: 'utf8mb4_unicode_ci'
    }
};

// Get the configuration based on the environment
const env = process.env.NODE_ENV || 'development';
const config = mysqlConfig[env];

if (!config) {
    throw new Error(`Configuration not found for environment: ${env}`);
}

if (['development', 'test'].includes(env)) {
    console.log(`MySQL config loaded - env: ${env} | host: ${config.host} | port: ${config.port} | db: ${config.database}`);
}

module.exports = config;