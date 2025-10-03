import { mockAuthService } from './mockAuthService.js';

export function checkAuth() {
    if (!mockAuthService.isAuthenticated()) {
        window.location.href = '/auth/login.html';
        return false;
    }
    return true;
}

export function checkRole(requiredRole) {
    const user = mockAuthService.getCurrentUser();
    if (!user || user.role !== requiredRole) {
        alert('Accès non autorisé');
        window.location.href = '/dashbord/user-dashbord.html';
        return false;
    }
    return true;
}
