import { API_ROUTES, HTTP_METHODS, FRONTEND_ROUTES } from '#core-frontend/constants/routes.js';
import { SessionService } from './sessionService.js';

export class AuthService {
    constructor() {
        this.sessionService = new SessionService();
    }

    async login(email, password, selectedRole = null) {
        try {
            const data = await apiClient(API_ROUTES.AUTH.LOGIN, {
                method: HTTP_METHODS.POST,
                body: JSON.stringify({ email, password, selectedRole })
            });

            if (data.success) {
                this.sessionService.storeSession(data.token, data.user);
            }

            return {
                success: data.success,
                message: data.message || (data.success ? null : 'Error of connexion'),
                token: data.token,
                user: data.user
            };
        } catch (error) {
            return {
                success: false,
                message: error.message || 'Error network or connexion'
            };
        }
    }

    logout() {
        this.sessionService.clearSession();
        window.location.href = FRONTEND_ROUTES.AUTH.LOGIN;
    }

    async register(userData) {
        try {
            return await apiClient(API_ROUTES.AUTH.REGISTER, {
                method: HTTP_METHODS.POST,
                body: JSON.stringify(userData)
            });

        } catch (error) {
            return {
                success: false,
                message: error.message || 'Error network'
            };
        }
    }

    checkAuth() {
        if (!this.sessionService.isAuthenticated() || !this.sessionService.hasActiveSession()) {
            window.location.href = FRONTEND_ROUTES.AUTH.LOGIN;
            return false;
        }
        return true;
    }

    checkRole(requiredRole) {
        const user = this.sessionService.getCurrentUser();
        if (!user || user.role !== requiredRole) {
            window.location.href = FRONTEND_ROUTES.AUTH.LOGIN;
            return false;
        }
        return true;
    }

    /**
     * Redirige vers le dashboard approprié selon le rôle
     */
    redirectToDashboard(role) {
        switch(role) {
            case 'admin':
                window.location.href = FRONTEND_ROUTES.DASHBOARD.ADMIN;
                break;
            case 'agent':
                window.location.href = FRONTEND_ROUTES.DASHBOARD.AGENT;
                break;
            case 'citizen':
                window.location.href = FRONTEND_ROUTES.DASHBOARD.USER;
                break;
            default:
                window.location.href = FRONTEND_ROUTES.AUTH.LOGIN;
        }
    }

}