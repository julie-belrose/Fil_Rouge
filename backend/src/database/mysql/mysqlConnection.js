import { createPool } from 'mysql2/promise';
import { configMySQL } from '#config/mysql/mysqlConfig.js';

let pool = null
export const connectDB = async () => {
  if (!pool) {
    pool = createPool(configMySQL);
    console.info('MySQL pool created');
  }
  return pool;
};

export const getPool = () => {
  if (!pool) {
    const msg = 'MySQL pool not initialized. Call connectDB() first.';
    console.error(msg);
    throw new Error(msg);
  }
  return pool;
};

export const closeDB = async () => {
  if (pool) {
    await pool.end();
    pool = null;
    console.info('MySQL connection pool closed');
  }
};

export const testConnectionMySQL = async () => {
  try {
    const pool = await connectDB();
    const connection = await pool.getConnection();
    await connection.ping();

    console.info('MySQL test OK — Connection successful');
    connection.release();

    await closeDB();
    process.exit(0);
  } catch (err) {
    console.error(`MySQL test failed: ${err.message}`);
    process.exit(1);
  }
};