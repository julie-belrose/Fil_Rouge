import { DashboardService } from '../services/DashboardService.js';
import { checkAuth, checkRole } from '../../auth/services/authGuard.js';

// Vérifier l'authentification et le rôle agent
if (!checkAuth() || !checkRole('agent')) {
    // L'utilisateur sera redirigé automatiquement
} else {
    document.addEventListener('DOMContentLoaded', () => {
        const dashboardService = new DashboardService();
        dashboardService.initializeUserDashboard();
    });
}