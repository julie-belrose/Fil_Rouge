import { getPool } from '#database/mysql/mysqlConnection.js';
import { authMapper } from '#domains/auth/auth.mapper.js';
import * as utilsMapper from '#utils/mapper.utils.js';

class AuthRepository {
  /**
   * Create a new authentication
   */
  static async create(authData) {
    const pool = getPool();
    const [result] = await pool.execute(
      'INSERT INTO authentification SET ?',
      [authMapper.toPersistence(authData)]
    );
    return this.findById(result.insertId);
  }

  /**
   * Find an authentication by its ID
   */
  static async findById(id) {
    const pool = getPool();
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
    const pool = getPool();
    const [rows] = await pool.execute(
      'SELECT * FROM authentification WHERE email = ?',
      [email]
    );
    const result = rows[0];
    return result ? utilsMapper.toDTO(result) : null;
  }
}

export const authRepository = new AuthRepository();