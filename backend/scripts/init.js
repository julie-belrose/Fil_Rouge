const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

// Logger basique en console
const log = {
  info: (msg) => console.log('\x1b[32m%s\x1b[0m', msg),
  error: (msg) => console.error('\x1b[31m%s\x1b[0m', msg)
};

async function initDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      multipleStatements: true
    });

    const schemaPath = path.join(__dirname, '../../sql/schema.sql');
    const badgePath = path.join(__dirname, '../../sql/badge_tables.sql');

    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    const badgeSql = fs.readFileSync(badgePath, 'utf8');

    // Créer la base si elle n'existe pas
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.MYSQL_DATABASE}\`;`);
    await connection.changeUser({ database: process.env.MYSQL_DATABASE });

    // Exécuter les fichiers SQL
    await connection.query(schemaSql);
    await connection.query(badgeSql);

    log.info('BDD initialisée avec succès.');
    await connection.end();
  } catch (error) {
    log.error("Erreur lors de l'initialisation de la BDD : ");
    console.error(error);
    process.exit(1);
  }
}

initDatabase();