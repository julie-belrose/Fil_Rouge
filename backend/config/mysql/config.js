require('dotenv').config();

const mysqlConfig = {
    development: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'fil_rouge_dev',
        port: process.env.DB_PORT || 3306,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        debug: process.env.NODE_ENV === 'development',
        timezone: '+00:00',
        charset: 'utf8mb4_unicode_ci',
        // SSL configuration - The data is encrypted end-to-end
        ssl: process.env.DB_SSL === 'true' ? {
            rejectUnauthorized: true
        } : false
    },
    test: {
        host: process.env.TEST_DB_HOST || 'localhost',
        user: process.env.TEST_DB_USER || 'root',
        password: process.env.TEST_DB_PASSWORD || '',
        database: process.env.TEST_DB_NAME || 'fil_rouge_test',
        port: process.env.TEST_DB_PORT || 3306,
        waitForConnections: true,
        connectionLimit: 5,
        queueLimit: 0
    },
    production: {
        host: process.env.PROD_DB_HOST,
        user: process.env.PROD_DB_USER,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME,
        port: process.env.PROD_DB_PORT || 3306,
        waitForConnections: true,
        connectionLimit: 20,
        queueLimit: 0,
        ssl: process.env.DB_SSL === 'true' ? {
            rejectUnauthorized: true
        } : false
    }
};

// Get the configuration based on the environment
const env = process.env.NODE_ENV || 'development';
const config = mysqlConfig[env];

if (!config) {
    throw new Error(`Configuration not found for environment: ${env}`);
}

module.exports = {
    ...config,
    // Alias for retrocompatibility
    database: config.database,
    username: config.user,
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
        max: config.connectionLimit,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: true,
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
};