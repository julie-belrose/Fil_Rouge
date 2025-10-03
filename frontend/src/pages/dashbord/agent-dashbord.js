import { DashboardService } from '../../domains/dashboard/services/DashboardService.js';

document.addEventListener('DOMContentLoaded', () => {
    const dashboardService = new DashboardService();
    dashboardService.initializeUserDashboard();
});