/**********************************************************************/
// SIG-02.3 - Accéder aux détails du signalement par ID (GET /report/:id)
/**********************************************************************/
// Connexion à la base MySQL
const pool = require('../../../database/mysql');


/**
 * SIG-02.3 - Récupère un signalement depuis la base par son ID
 * @function
 * @param {number} id - Identifiant du signalement à récupérer
 * @returns {Promise<Object|null>} Le signalement trouvé ou null si inexistant
 */
const getReportDetails = async (id) => {
  const [rows] = await db.query('SELECT * FROM report WHERE id = ?', [id]); // Requête SQL paramétrée pour éviter les injections
  return rows[0]; // Retourne uniquement le premier résultat trouvé
};


// Export de la fonction pour l'utiliser dans le contrôleur
module.exports = {
  getReportDetails
};
/**********************************************************************/

