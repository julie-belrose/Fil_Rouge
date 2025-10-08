import { SessionService } from '#domains-frontend/auth/services/sessionService.js';
import { FRONTEND_ROUTES } from '../../core/constants/routes.js';
import { iconService } from '../services/iconService.js';
import { TokenMonitorService } from '../services/tokenMonitorService.js';

export class LogoutButton extends HTMLElement {
    constructor() {
        super();
        this.sessionService = new SessionService();
    }

    /**
     * Web Component lifecycle method - called when element is added to DOM
     * @override
     */
    // noinspection JSUnusedGlobalSymbols
    async connectedCallback() {
        await iconService.loadSprite();

        this.innerHTML = `
            <button class="flex items-center space-x-2 px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all group" title="Se déconnecter">
                <svg class="w-5 h-5"><use href="#logout-icon"/></svg>
                <span class="hidden lg:block text-sm font-medium">Déconnexion</span>
            </button>
        `;

        this.querySelector('button').addEventListener('click', () => this.handleLogout());
    }

    handleLogout() {
        if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
            const tokenMonitor = TokenMonitorService.getInstance();
            tokenMonitor.stopMonitoring();

            this.sessionService.clearSession();
            window.location.href = FRONTEND_ROUTES.AUTH.LOGOUT;
        }
    }
}

customElements.define('logout-button', LogoutButton);