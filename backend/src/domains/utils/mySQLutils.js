/**
 * Génère les placeholders SQL pour une requête INSERT
 * @param {Object} data - Objet à insérer
 * @returns {{ fields: string, placeholders: string, values: any[] }}
 */
const generateSQLInsertParts = (data) => {
    const fields = Object.keys(data).join(', ');
    const placeholders = Object.keys(data).map(() => '?').join(', ');
    const values = Object.values(data);
    return { fields, placeholders, values };
};



module.exports = {
    generateSQLInsertParts
};
