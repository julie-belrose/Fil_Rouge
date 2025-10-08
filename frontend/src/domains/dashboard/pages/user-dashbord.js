import { DataUserService } from '#shared-frontend/services/dataUserService.js';

document.addEventListener('DOMContentLoaded', () => {
    const dashboardService = new DataUserService();
    dashboardService.initializeUserDashboard();
});