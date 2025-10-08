import { FRONTEND_ROUTES } from '#core-frontend/constants/routes.js';

// Global access to the button element is accepted here as a single point of failure
const goHomeBtn = document.getElementById('goHome');

/**
 * @class NavigationService
 * @classdesc Provides static utility methods for client-side navigation,
 * countdown redirects, and preventing default navigation flows.
 */
export class NavigationService {
    /**
     * @property {number | null} intervalId - Stores the ID of the currently running countdown interval.
     */
    static intervalId = null;

    /**
     * @private
     * Retrieves the DOM element used for displaying the countdown number.
     * @returns {HTMLElement | null}
     */
    static _getCountdownElement() {
        return document.getElementById('countdown');
    }

    /**
     * @private
     * Defines the default route for automatic redirection.
     * @returns {string} The URL path for the dashboard.
     */
    static _getRedirectRoute() {
        // Uses the temporary default route as specified by the user
        return FRONTEND_ROUTES.DASHBOARD.USER;
    }

    /**
     * @private
     * Updates the text content of the countdown element.
     * @param {HTMLElement | null} element
     * @param {number} value
     */
    static _updateCountdownText(element, value) {
        if (element) {
            element.textContent = value;
        }
    }

    /**
     * @private
     * Executes the final window redirection and stops the interval.
     */
    static _executeFinalRedirect() {
        window.location.href = this._getRedirectRoute();
        this.stopRedirect();
    }

    /**
     * Stops the currently running countdown interval.
     * @static
     * @returns {void}
     */
    static stopRedirect() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    /**
     * Initializes an automatic redirection countdown.
     * @static
     * @param {number} [delay=5000] - The delay in milliseconds before final redirection.
     * @returns {void}
     */
    static autoRedirectToLogin(delay = 5000) {
        this.stopRedirect(); // Always stop before starting a new one

        let countdown = delay / 1000;
        const countdownElement = this._getCountdownElement();

        const updateCountdown = () => {
            this._updateCountdownText(countdownElement, countdown);
            countdown--;
            if (countdown < 0) {
                this._executeFinalRedirect();
            }
        };

        updateCountdown();
        this.intervalId = setInterval(updateCountdown, 1000);
    }

    /**
     * Sets up the event listener on the goHome button to immediately stop the countdown and navigate away.
     * This replaces the user's original 'redirectStop' function.
     * @static
     * @returns {void}
     */
    static setupRedirectStopListener() {
        if (goHomeBtn) {
            goHomeBtn.addEventListener('click', () => {
                this._executeFinalRedirect(); // Use the specialized method
            });
        }
    }
}