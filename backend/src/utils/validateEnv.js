import dotenv from 'dotenv';
dotenv.config();

const requiredVarsByEnv = {
    development: [
    'DEV_MONGO_URL', 'DEV_MONGO_DB',
    'DEV_DB_HOST', 'DEV_DB_PORT', 'DEV_DB_USER', 'DEV_DB_PASSWORD', 'DEV_DB_NAME'
    ],
    test: [
      'TEST_MONGO_URL', 'TEST_MONGO_DB',
      'TEST_DB_HOST', 'TEST_DB_PORT', 'TEST_DB_USER', 'TEST_DB_PASSWORD', 'TEST_DB_NAME'
    ],
    production: [
      'PROD_MONGO_URL', 'PROD_MONGO_DB',
      'PROD_DB_HOST', 'PROD_DB_PORT', 'PROD_DB_USER', 'PROD_DB_PASSWORD', 'PROD_DB_NAME'
    ]
  };
  
const env = process.env.NODE_ENV || 'development';
const requiredVars = requiredVarsByEnv[env] || [];

const missing = requiredVars.filter((key) => !process.env[key]);

if (missing.length > 0) {
  console.error(`Missing environment variables for NODE_ENV=${env}:\n${missing.join('\n')}`);
    process.exit(1);
}

console.info(`All required environment variables are set for NODE_ENV=${env}`);
