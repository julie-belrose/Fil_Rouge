import { DashboardService } from '../services/DashboardService.js';
import { AuthService } from '../../auth/services/AuthService.js';

const authService = new AuthService();

// Vérifier l'authentification et le rôle agent
if (!authService.checkAuth() || !authService.checkRole('agent')) {
    // L'utilisateur sera redirigé automatiquement
} else {
    document.addEventListener('DOMContentLoaded', () => {
        const dashboardService = new DashboardService();
        dashboardService.initializeUserDashboard();
    });
}