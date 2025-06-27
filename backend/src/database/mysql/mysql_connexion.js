const mysql = require('mysql2/promise');
const logger = require('../utils/logger');
const config = require('../config/mysql/config');

const pool = mysql.createPool(config);

// Test of the connection
const testConnectionMysql = async () => {
  try {
    const connection = await pool.getConnection();
    logger.info('MySQL Connected');
    connection.release();
  } catch (error) {
    logger.error('MySQL connection error:', error.message);
    process.exit(1);
  }
};

module.exports = {
  pool,
  testConnectionMysql
};
