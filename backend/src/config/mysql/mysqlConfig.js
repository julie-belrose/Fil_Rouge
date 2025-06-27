import * as dotenv from 'dotenv';
dotenv.config();
import { getEnvVar } from '#utils/env.utils.js';

export const configMySQL = {
    host: getEnvVar('DB_HOST'),
    user: getEnvVar('DB_USER'),
    password: getEnvVar('DB_PASSWORD') ?? '',
    database: getEnvVar('DB_NAME'),
    port: Number(getEnvVar('DB_PORT')) || 3306,
    waitForConnections: true,
    connectionLimit: Number(getEnvVar('DB_POOL_LIMIT')) || 10,
    queueLimit: 0,
    debug: (process.env.NODE_ENV || 'dev') === 'dev',
    timezone: '+00:00',
    charset: 'utf8mb4_unicode_ci',
    ssl: getEnvVar('DB_SSL') === 'true'
        ? { rejectUnauthorized: getEnvVar('DB_SSL_REJECT_UNAUTHORIZED') !== 'false' }
        : false,
};

const startMySQL = async () => {
    try {
        if (['dev', 'test'].includes(process.env.NODE_ENV || 'dev')) {
            console.log(
                `MySQL config loaded | host=${configMySQL.host} port=${configMySQL.port} db=${configMySQL.database}`
            );
        }
    } catch (err) {
        if (!configMySQL.host || !configMySQL.user || !configMySQL.database) {
            throw new Error(`[MySQL] Missing env: host=${configMySQL.host} user=${configMySQL.user} db=${configMySQL.database}`);
        }
    }
};

startMySQL();