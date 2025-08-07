import 'dotenv/config';
import { connectDB, closeDB } from '../src/database/mysql/mysqlConnection.js';

const seedMySQL = (async () => {
  try {
    const pool = await connectDB();
    const connection = await pool.getConnection();

    await connection.query(`
      CREATE TABLE IF NOT EXISTS user (
        id INT AUTO_INCREMENT PRIMARY KEY,
        auth_id INT NOT NULL,
        pseudo VARCHAR(100),
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        district VARCHAR(100),
        loyalty_points INT NOT NULL
      )
    `);

    await connection.query(`
      INSERT INTO user (auth_id, pseudo, first_name, last_name, district, loyalty_points)
      VALUES
      (1, 'julie_dev', 'Julie', 'Belrose', 'Lyon 7e', 50),
      (2, 'agathe_test', 'Agathe', 'Durand', 'Paris 18e', 20)
    `);

    console.info('MySQL seed complete - 2 users inserted');
    connection.release();
    await closeDB();
  } catch (err) {
    console.error('MySQL seed failed:', err.message);
    process.exit(1);
  }
});

seedMySQL();

