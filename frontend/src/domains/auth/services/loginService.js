import { AuthService } from '#domains-frontend/auth/services/authService.js';
import { LoginUIManager } from '#domains-frontend/auth/services/loginUIManager.js';
import {SessionService} from "#domains-frontend/auth/services/sessionService.js";

export class LoginService {
    constructor() {
        this.authService = new AuthService();
        this.loginUiManager = new LoginUIManager();
        this.sessionService = new SessionService();
    }

    initializeLoginPage() {
        if (this.sessionService.isAuthenticated() && this.sessionService.hasActiveSession()) {
            this.loginUiManager.showLoginForm();
        } else {
            this.sessionService.clearSession();
            this.loginUiManager.showLoginForm();
        }
    };

    /**
     * Gère la soumission du formulaire de connexion
     */
    async handleLoginSubmit(email, password, role) {
        this.initializeLoginPage();
        this.authService.checkSelectRole();
        const stateVal = this.changeTextButton();

        try {
            const result = await this.login(email, password, role);
            this.getResultOfConnexion(result);
        } catch (error) {
            this.showError('Erreur de connexion');
            return false;
        } finally {
            this.resetDisplayButton(stateVal);
        }
    }

    registrerLoginForm(){
        document.getElementById('login-form').addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const role = document.getElementById('role').value;
            const submitBtn = e.target.querySelector('button[type="submit"]');

            if (!role) {
                uiManager.showError('Veuillez sélectionner un rôle');
                return;
            }

            uiManager.changeTextButton(submitBtn); // Changement de l'UI

            try {
                const result = await authService.login(email, password, role);

                if (result.success) {
                    uiManager.showSuccess('Connexion réussie !');
                    authService.redirectToDashboard(role);
                } else {
                    uiManager.showError(result.message || 'Échec de la connexion.');
                }

            } catch (error) {
                uiManager.showError('Erreur de connexion : Problème réseau.');
            } finally {
                uiManager.resetDisplayButton(submitBtn);
            }
        });
    }

}




