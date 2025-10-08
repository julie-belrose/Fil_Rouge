import { FRONTEND_ROUTES } from '#core-frontend/constants/routes.js';

export class NavigationService {
    /**
     * Redirection automatique avec compte à rebours
     */
    static autoRedirectToLogin(delay = 5000) {
        let countdown = delay / 1000;
        const countdownElement = document.getElementById('countdown');

        const updateCountdown = () => {
            if (countdownElement) {
                countdownElement.textContent = countdown;
            }
            countdown--;

            if (countdown < 0) {
                window.location.href = FRONTEND_ROUTES.AUTH.LOGIN;
            }
        };

        updateCountdown();
        return setInterval(updateCountdown, 1000);
    }

    /**
     * Redirection manuelle vers login
     */
    static redirectToLogin() {
        window.location.href = FRONTEND_ROUTES.AUTH.LOGIN;
    }

    /**
     * Configure le bouton de redirection manuelle
     */
    static setupManualRedirect(selector = 'a[href="login.html"]') {
        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                this.redirectToLogin();
            });
        }
    }
}