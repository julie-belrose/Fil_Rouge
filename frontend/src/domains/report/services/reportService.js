import { API_ROUTES, HTTP_METHODS } from '#core-frontend/constants/routes.js';
import { buildUrlWithParams } from '../../shared/routeHelper.js';
import {apiClient} from "#frontend/domains/shared/apiClient.js";

export class ReportService {

    async getAllReports() {
        return await apiClient(API_ROUTES.REPORTS.LIST, {
            method: HTTP_METHODS.GET,
        });
    }

    async getReportById(id) {
        const url = buildUrlWithParams(API_ROUTES.REPORTS.DETAILS, id);
        return await apiClient(url, {
            method: HTTP_METHODS.GET,
        });
    }

    async createReport(reportData) {
        return await apiClient(API_ROUTES.REPORTS.CREATE, {
            method: HTTP_METHODS.POST,
            body: JSON.stringify(reportData)
        });
    }
}
