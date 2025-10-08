import 'dotenv/config';
import { connectDB, closeDB } from '#database/mysql/mysqlConnection.js';

const testAuthTable = async (connection) => {
    try {
        await connection.query(`
            CREATE TABLE IF NOT EXISTS authentification (
                                                            id INT AUTO_INCREMENT PRIMARY KEY,
                                                            last_name VARCHAR(100) NOT NULL,
                first_name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                role VARCHAR(50) NOT NULL,
                is_active BOOLEAN NOT NULL,
                created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
                )
        `);
    } catch (err) {
        console.error(`MySQL seed failed: ${err.message}`);
        process.exit(1);
    }
};

const testAuth = async (connection) => {
    try {
        await connection.query(`
            INSERT INTO authentification (id, last_name, first_name, email, password_hash, role, is_active, created_at)
            VALUES
                (1, 'Belrose', 'Julie', 'julie@example.com', 'password', 'citizen', true, NOW()),
                (2, 'Clement', 'Agathe', 'agathe@example.com', 'password', 'citizen', true, NOW()),
                (3, 'Durand', 'Alex', 'user@example.com', 'password', 'citizen', true, NOW()),
                (4, 'Smith', 'Jane', 'agent@example.com', 'password', 'agent', true, NOW()),
                (5, 'Admin', 'Admin', 'admin@example.com', 'password', 'admin', true, NOW())
        `);
    } catch (err) {
        console.error(`MySQL seed failed: ${err.message}`);
        process.exit(1);
    }
};

const testAdminRequestTable = async (connection) => {
    try {
        await connection.query(`
            CREATE TABLE IF NOT EXISTS admin_requests (
                                                          hashed_token VARCHAR(100) NOT NULL,
                related_user_id INT NOT NULL,
                status VARCHAR(50) NOT NULL,
                created_at DATETIME NOT NULL,
                expires_at DATETIME NOT NULL
                )
        `);
    } catch (err) {
        console.error(`MySQL seed failed: ${err.message}`);
        process.exit(1);
    }
};

const testAdminRequest = async (connection) => {
    try {
        await connection.query(`
            INSERT INTO admin_requests (hashed_token, related_user_id, status, created_at, expires_at)
            VALUES
                ('hashed_token_1', 5, 'CONFIRMED', '2025-09-01', '2025-10-01')
        `);
    } catch (err) {
        console.error(`MySQL seed failed: ${err.message}`);
        process.exit(1);
    }
};

const testUserTable = async (connection) => {
    try {
        await connection.query(`
            CREATE TABLE IF NOT EXISTS users (
                                                 id INT AUTO_INCREMENT PRIMARY KEY,
                                                 auth_id INT NOT NULL,
                                                 pseudo VARCHAR(100),
                district VARCHAR(100),
                loyalty_points INT NOT NULL,
                FOREIGN KEY (auth_id) REFERENCES authentification(id) ON DELETE CASCADE
                )
        `);
    } catch (err) {
        console.error(`MySQL seed failed: ${err.message}`);
        process.exit(1);
    }
};

const testUser = async (connection) => {
    try {
        await connection.query(`
            INSERT INTO users (auth_id, pseudo, district, loyalty_points)
            VALUES
                (1, 'julie_dev', 'Lyon 7e', 50),
                (2, 'agathe_dev', 'Lyon 7e', 50),
                (3, 'alex_dev', 'Lyon 7e', 50)
        `);
    } catch (err) {
        console.error(`MySQL seed failed: ${err.message}`);
        process.exit(1);
    }
};

const testAdminTable = async (connection) => {
    try {
        await connection.query(`
            CREATE TABLE IF NOT EXISTS admins (
                                                  user_id INT NOT NULL,
                                                  center_id INT NOT NULL,
                                                  FOREIGN KEY (user_id) REFERENCES authentification(id) ON DELETE CASCADE
                )
        `);
    } catch (err) {
        console.error(`MySQL seed failed: ${err.message}`);
        process.exit(1);
    }
};

const testAdmin = async (connection) => {
    try {
        await connection.query(`
            INSERT INTO admins (user_id, center_id)
            VALUES
                (5, 1)
        `);
    } catch (err) {
        console.error(`MySQL seed failed: ${err.message}`);
        process.exit(1);
    }
};

const seedMySQL = (async () => {
    let connection;
    try {
        const pool = await connectDB();
        connection = await pool.getConnection();

        await testAuthTable(connection);
        await testAuth(connection);

        await testAdminRequestTable(connection);
        await testAdminRequest(connection);

        await testUserTable(connection);
        await testUser(connection);

        await testAdminTable(connection);
        await testAdmin(connection);

        console.info('MySQL seed complete - 5 users inserted');
        connection.release();
        await closeDB();
    } catch (err) {
        console.error('MySQL seed failed:', err.message);
        if (connection) {
            connection.release();
        }
        process.exit(1);
    }
});

seedMySQL();