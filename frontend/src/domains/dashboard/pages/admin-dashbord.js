import { DashboardService } from '../services/DashboardService.js';

document.addEventListener('DOMContentLoaded', () => {
    const dashboardService = new DashboardService();
    dashboardService.initializeUserDashboard();
});