import { IconService } from '#shared-frontend/services/iconService.js';

export class LogoutButton extends HTMLElement {
    constructor() {
        super();
    }

    /**
     * Web Component lifecycle method - called when element is added to DOM
     * @override
     */
    // noinspection JSUnusedGlobalSymbols
    async connectedCallback() {
        await IconService.loadSprite();

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
            window.location.href = '/';
        }
    }
}

customElements.define('logout-button', LogoutButton);