import dotenv from 'dotenv';
dotenv.config();

const requiredVarsByEnv = {
    development: [
      'MONGO_DEV_URL', 'MONGO_DEV_DB',
      'DB_HOST', 'DB_PORT', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'
    ],
    test: [
      'MONGO_TEST_URL', 'MONGO_TEST_DB',
      'TEST_DB_HOST', 'TEST_DB_PORT', 'TEST_DB_USER', 'TEST_DB_PASSWORD', 'TEST_DB_NAME'
    ],
    production: [
      'MONGO_PROD_URL', 'MONGO_PROD_DB',
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
