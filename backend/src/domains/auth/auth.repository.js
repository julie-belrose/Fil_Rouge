const pool = require('../../../../config/database');
const AuthMapper = require('./auth.mapper');
const utilsMapper = require('../../utils/mapperUtils');

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

    const result = rows[0];
    return result ? utilsMapper.toDTO(result) : null;
  }

  /**
   * Find an authentication by its email
   */
  static async findByEmail(email) {
    const [rows] = await pool.execute(
      'SELECT * FROM authentification WHERE email = ?',
      [email]
    );
    const result = rows[0];
    return result ? utilsMapper.toDTO(result) : null;
  }
}

module.exports = AuthRepository;