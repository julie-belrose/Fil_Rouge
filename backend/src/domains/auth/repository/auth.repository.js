const pool = require('../../../../config/database');
const AuthMapper = require('../mapper/auth.mapper');

class AuthRepository {
  /**
   * Create a new authentication
   */
  static async create(authData) {
    const [result] = await pool.execute(
      'INSERT INTO authentification SET ?',
      [AuthMapper.toPersistence(authData)]
    );
    return this.findById(result.insertId);
  }

  /**
   * Find an authentication by its ID
   */
  static async findById(id) {
    const [rows] = await pool.execute(
      'SELECT * FROM authentification WHERE id = ?',
      [id]
    );
    return AuthMapper.toDomain(rows[0]);
  }

  /**
   * Find an authentication by its email
   */
  static async findByEmail(email) {
    const [rows] = await pool.execute(
      'SELECT * FROM authentification WHERE email = ?',
      [email]
    );
    return AuthMapper.toDomain(rows[0]);
  }
}

module.exports = AuthRepository;