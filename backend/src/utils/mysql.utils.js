import { getPool } from '#database/mysql/mysqlConnection.js';

export const setTimestamps = (data) => {
    const now = new Date();
    return {
        ...data,
        created_at: now,
        updated_at: now
    };
};

/**
 * Génère les placeholders SQL pour une requête INSERT
 * @param {Object} data - Objet à insérer
 * @returns {{ fields: string, placeholders: string, values: any[] }}
 */
export const generateInsertParts = (data) => {
    const fields = Object.keys(data).join(', ');
    const placeholders = Object.keys(data).map(() => '?').join(', ');
    const values = Object.values(data);
    return { fields, placeholders, values };
};

export const generateUpdateParts = (data) => {
    const updateString = Object.keys(data).map((key) => `${key} = ?`).join(', ');
    const values = Object.values(data);
    return { updateString, values };
};

/**
 * Insert data with timestamps into SQL table
 * @param {string} tableName - The name of the SQL table
 * @param {Object} data - The raw data to insert
 * @param {Function} [mapper] - Optional mapper (e.g. toDTO)
 * @returns {Promise<Object|null>} The inserted and mapped row
 */
export const createWithTimestampsSQL = async (tableName, data, mapper = (x) => x) => {
    const enriched = setTimestamps(data);
    const { fields, placeholders, values } = generateInsertParts(enriched);

    const [result] = await getPool().execute(
        `INSERT INTO ${tableName} (${fields}) VALUES (${placeholders})`,
        values
    );

    if (!result.insertId) {
        throw new Error('Insert failed');
    }

    return await findById(tableName, result.insertId, mapper);
};

/**
 * Generic findById
 * @param {string} tableName - Table name
 * @param {number} id - Row ID
 * @param {Function} [mapper] - Optional mapper
 * @returns {Promise<Object|null>}
 */
export const findById = async (tableName, id, mapper = (x) => x) => {
    const [rows] = await getPool().execute(
        `SELECT * FROM ${tableName} WHERE id = ?`,
        [id]
    );
    return rows.length ? mapper(rows[0]) : null;
};

/**
 * Generic deleteById
 * @param {string} tableName - Table name
 * @param {number} id - Row ID
 * @returns {Promise<boolean>} True if deleted, false otherwise
 */
export const deleteById = async (tableName, id) => {
    const [result] = await getPool().execute(
        `DELETE FROM ${tableName} WHERE id = ?`,
        [id]
    );
    return result.affectedRows > 0;
};

/**
 * Generic updateById
 * @param {string} tableName - Table name
 * @param {number} id - Row ID
 * @param {Object} updateData - Fields to update
 * @param {Function} [mapper] - Optional mapper
 * @returns {Promise<Object|null>}
 */
export const updateById = async (tableName, id, updateData, mapper = (x) => x) => {
    const now = new Date();
    const enriched = { ...updateData, updated_at: now };

    const { updateString, values } = generateUpdateParts(enriched);

    const [result] = await getPool().execute(
        `UPDATE ${tableName} SET ${updateString} WHERE id = ?`,
        [...values, id]
    );

    if (result.affectedRows === 0) return null;

    return await findById(tableName, id, mapper);
};

export const findManyByField = async (table, field, value, mapper = (x) => x) => {
    const [rows] = await getPool().execute(
        `SELECT * FROM ${table} WHERE ${field} = ?`,
        [value]
    );
    return rows.map(mapper);
};