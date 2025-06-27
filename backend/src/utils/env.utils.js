import 'dotenv/config';

export const currentEnv = (process.env.NODE_ENV || 'development').toLowerCase();

// Ici on mappe NODE_ENV → préfixe .env
const prefix =
  currentEnv === 'development' ? 'DEV'
: currentEnv === 'test'        ? 'TEST'
: currentEnv === 'production'  ? 'PROD'
: 'DEV';

/**
 * Retrieves an env variable with prefix (DEV_/TEST_/PROD_)
 * Fallback to the version without prefix if absent
 */
export function getEnvVar(key, fallback = undefined) {
  return process.env[`${prefix}_${key}`] ?? process.env[key] ?? fallback;
}
