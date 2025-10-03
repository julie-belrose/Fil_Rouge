import { FRONTEND_ROUTES } from './core/constants/routes.js';

window.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('auth_token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    setTimeout(() => {
        if (!token) {
            window.location.href = FRONTEND_ROUTES.AUTH.LOGIN;
        } else {
            switch (user.role) {
                case 'admin':
                    window.location.href = FRONTEND_ROUTES.DASHBOARD.ADMIN;
                    break;
                case 'agent':
                    window.location.href = FRONTEND_ROUTES.DASHBOARD.AGENT;
                    break;
                default:
                    window.location.href = FRONTEND_ROUTES.DASHBOARD.USER;
            }
        }
    }, 1000);
});