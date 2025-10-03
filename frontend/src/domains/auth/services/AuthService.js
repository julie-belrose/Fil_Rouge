import { API_ROUTES, HTTP_METHODS } from '../../../core/constants/routes.js';
import { SessionService } from './SessionService.js';

export class AuthService {
    constructor() {
        this.sessionService = new SessionService();
    }

    async login(email, password, selectedRole = null) {
        try {
            const response = await fetch(API_ROUTES.AUTH.LOGIN, {
                method: HTTP_METHODS.POST,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, selectedRole })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                // Stocker la session via SessionService
                this.sessionService.storeSession(data.token, data.user);

                return {
                    success: true,
                    token: data.token,
                    user: data.user
                };
            }

            return {
                success: false,
                message: data.message || 'Erreur de connexion'
            };
        } catch (error) {
            return {
                success: false,
                message: 'Erreur réseau'
            };
        }
    }

    logout() {
        this.sessionService.clearSession();
        window.location.href = '/auth/login.html';
    }

    async register(userData) {
        try {
            const response = await fetch(API_ROUTES.AUTH.REGISTER, {
                method: HTTP_METHODS.POST,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            return await response.json();
        } catch (error) {
            return {
                success: false,
                message: 'Erreur réseau'
            };
        }
    }
}