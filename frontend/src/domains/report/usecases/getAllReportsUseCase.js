import { ReportService } from '../services/reportService.js';
import { MOCK_REPORTS } from '../../../../tests/mock/index.js';

export class GetAllReportsUseCase {
    constructor() {
        this.reportService = new ReportService();
    }

    async execute() {
        try {
            // TODO: Remplacer par l'appel réel quand le backend sera prêt
            //const response = await this.reportService.getAllReports();

            const reports = MOCK_REPORTS;

            return {
                success: true,
                data: reports.map(report => ({
                    ...report,
                    formattedDate: this.formatDate(report.creation_date),
                    statusLabel: this.getStatusLabel(report.status)
                }))
            };
        } catch (error) {
            console.error('Erreur dans GetAllReportsUseCase:', error);
            return {
                success: false,
                error: error.message || 'Erreur lors de la récupération des signalements'
            };
        }
    }

    formatDate(dateString) {
        if (!dateString) return "";
        return new Date(dateString).toLocaleDateString("fr-FR");
    }

    getStatusLabel(status) {
        switch (status) {
            case 'resolved':
                return 'Résolu';
            case 'in_progress':
                return 'En cours';
            case 'pending':
                return 'En attente';
            default:
                return status;
        }
    }
}