import 'dotenv/config';
import { connectDB, closeDB, getPool } from '../src/database/mysql/mysqlConnection';

const initMySQL = (async () => {
    try {
        await connectDB();
        const pool = getPool();
        const connection = await pool.getConnection();

        await connection.query('SELECT 1');
        console.info('MySQL initialized - connection OK');
        connection.release();
        await closeDB();
    } catch (err) {
        console.error('MySQL init failed:', err.message);
        process.exit(1);
    }
});

initMySQL();
