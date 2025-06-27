import 'dotenv/config';

export const currentEnv = (process.env.NODE_ENV || 'development').toLowerCase();

// Ici on mappe NODE_ENV → préfixe .env
const prefix =
  currentEnv === 'development' ? 'DEV'
: currentEnv === 'test'        ? 'TEST'
: currentEnv === 'production'  ? 'PROD'
:                                'DEV';

/**
 * Récupère une variable d'env avec préfixe (DEV_/TEST_/PROD_)
 * Fallback sur la version sans préfixe si absente
 */
export function getEnvVar(key, fallback = undefined) {
  return process.env[`${prefix}_${key}`] ?? process.env[key] ?? fallback;
}