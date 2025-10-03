const mysql = require('mysql2/promise');
const logger = require('../utils/logger');

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test of the connection
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    logger.info('MySQL Connected');
    connection.release();
  } catch (error) {
    logger.error();
    process.exit(1);
  }
};

module.exports = {
  pool,
  testConnection
};
