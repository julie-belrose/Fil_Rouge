import { SessionService } from './SessionService.js';
import { FRONTEND_ROUTES } from '../../../core/constants/routes.js';

const sessionService = new SessionService();

export function checkAuth() {
    if (!sessionService.isAuthenticated() || !sessionService.hasActiveSession()) {
        window.location.href = FRONTEND_ROUTES.AUTH.LOGIN;
        return false;
    }
    return true;
}

export function checkRole(requiredRole) {
    const user = sessionService.getCurrentUser();
    if (!user || user.role !== requiredRole) {
        alert('Accès non autorisé');
        window.location.href = FRONTEND_ROUTES.AUTH.LOGIN;
        return false;
    }
    return true;
}

