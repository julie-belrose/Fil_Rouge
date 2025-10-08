import { DashboardService } from '../services/dashboardService.js';
import { AuthService } from '../../auth/services/authService.js';

const authService = new AuthService();

// Vérifier l'authentification et le rôle admin
if (!authService.checkAuth() || !authService.checkRole('admin')) {
    // L'utilisateur sera redirigé automatiquement
} else {
    document.addEventListener('DOMContentLoaded', () => {
        const dashboardService = new DashboardService();
        dashboardService.initializeUserDashboard();
    });
}