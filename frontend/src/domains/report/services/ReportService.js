import { API_ROUTES, HTTP_METHODS } from '../../../core/constants/routes.js';
import { buildUrlWithParams } from '../../shared/RouteHelper.js';

export class ReportService {
    async getAllReports() {
        try {
            const response = await fetch(API_ROUTES.REPORTS.LIST, {
                method: HTTP_METHODS.GET,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
                }
            });

            if (response.ok) {
                return await response.json();
            }

            throw new Error('Erreur lors de la récupération des signalements');
        } catch (error) {
            throw new Error(error.message || 'Erreur réseau');
        }
    }

    async getReportById(id) {
        try {
            const url = buildUrlWithParams(API_ROUTES.REPORTS.DETAILS, id);
            const response = await fetch(url, {
                method: HTTP_METHODS.GET,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
                }
            });

            if (response.ok) {
                return await response.json();
            }

            throw new Error('Signalement non trouvé');
        } catch (error) {
            throw new Error(error.message || 'Erreur réseau');
        }
    }

    async createReport(reportData) {
        try {
            const response = await fetch(API_ROUTES.REPORTS.CREATE, {
                method: HTTP_METHODS.POST,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
                },
                body: JSON.stringify(reportData)
            });

            if (response.ok) {
                return await response.json();
            }

            throw new Error('Error pending of creation on report');
        } catch (error) {
            throw new Error(error.message || 'Erreur réseau');
        }
    }
}