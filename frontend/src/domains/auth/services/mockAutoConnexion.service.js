import { mockAuthService } from './mockAuthService.js';
import { checkAuth } from './authGuard.js';

/**
 * Redirect to login page if user is not authenticated
 */
function redirectToLoginIfNotAuthenticated() {
    if (!checkAuth()) {
        window.location.href = '/auth/login.html';
        return false;
    }
    return true;
}

/**
 * Update user interface elements with user data
 * @param {Object} user - User data object
 */
function updateUserInterface(user) {
    const userName = user.name || 'Utilisateur';
    const userGreeting = user.name ? user.name.split(' ')[0] : 'Utilisateur';

    const userNameEl = document.getElementById('user-name');
    const userGreetingEl = document.getElementById('user-greeting');

    if (userNameEl) userNameEl.textContent = userName;
    if (userGreetingEl) userGreetingEl.textContent = userGreeting;
}

/**
 * Setup logout button event listener
 */
function setupLogoutButton() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mockAuthService.logout();
        });
    }
}



/**
 * Initialize the auto connection service
 */
function initializeAutoConnection() {
    if (!redirectToLoginIfNotAuthenticated()) {
        return;
    }

    const user = mockAuthService.getCurrentUser();

    updateUserInterface(user);
    setupLogoutButton();
}

// Initialize the service
initializeAutoConnection();