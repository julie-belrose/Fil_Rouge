const { createReportDto } = require('../dto/report.dto');
const { getReportById } = require('../service/report.service'); 

// Get all reports
const getReports = (req, res) => {
    res.json('GetReports Controller OK');
};


/**********************************************************************/
// SIG-02.3 - Accéder aux détails du signalement par ID (GET /report/:id)
/**********************************************************************/
/**
 * SIG-02.3 - Récupérer un signalement par son ID
 * @route GET /report/:id
 * @param {Object} req - Objet de la requête Express
 * @param {Object} res - Objet de la réponse Express
 * @returns {Object} 200 - Le signalement demandé
 * @returns {Object} 404 - Si aucun signalement trouvé
 * @returns {Object} 500 - Erreur serveur
 */
const getReportDetails = async (req, res) => {
  try {
    const reportId = req.params.id;
    const report = await reportService.getReportDetails(reportId);
    if (!report) return res.status(404).json({ message: 'Signalement introuvable' });
    res.status(200).json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
/**********************************************************************/


// Create report
const createReport = (req, res) => {
    const reportData = createReportDto(req.body);
    const report = reportEntity(reportData);
    console.log(report);
    console.log(reportData);
    res.status(201).json('CreateReport Controller OK');
};

// Update report
const updateReport = (req, res) => {
    res.json(`UpdateReport ${req.params.id} Controller OK`);
};

// Delete report
const deleteReport = (req, res) => {
    res.json(`DeleteReport ${req.params.id} Controller OK`);
};

module.exports = {
    getReports,
    getReportDetails,
    createReport,
    updateReport,
    deleteReport
};