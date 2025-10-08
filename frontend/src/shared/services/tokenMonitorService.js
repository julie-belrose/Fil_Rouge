import { SessionService } from '#domains-frontend/auth/services/sessionService.js';

export class TokenMonitorService {
    constructor() {
        this.sessionService = new SessionService();
        this.intervalId = null;
        this.checkInterval = 15000; // Vérifie toutes les 15 secondes
    }

    startMonitoring() {
        // Éviter les doublons si déjà en cours
        if (this.intervalId) {
            this.stopMonitoring();
        }

        this.intervalId = setInterval(() => {
            this.checkTokenValidity();
        }, this.checkInterval);

        console.log('Token monitoring started');
    }

    stopMonitoring() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            console.log('Token monitoring stopped');
        }
    }

    checkTokenValidity() {
        // Utilise la méthode existante du SessionService
        if (!this.sessionService.isAuthenticated()) {
            console.log('[TOKEN_MONITOR] Token expired - delegating to auth service');
            //this.authService.performForceLogout();
            this.sessionService.clearSession();
        }
    }

    // Méthode pour obtenir l'instance singleton
    static getInstance() {
        if (!TokenMonitorService.instance) {
            TokenMonitorService.instance = new TokenMonitorService();
        }
        return TokenMonitorService.instance;
    }
}