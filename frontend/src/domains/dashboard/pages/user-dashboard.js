import { DashboardManagerUI } from '#shared-frontend/services/dashboardManagerUI.js';

document.addEventListener('DOMContentLoaded', () => {
    const dataService = new DashboardManagerUI();
    dataService.initializeUserDashboard();
});