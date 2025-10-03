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
 * Generate HTML for points section
 * @param {Object} user - User data with points
 * @returns {string} HTML string for points section
 */
function generatePointsSection(user) {
    const progressPercentage = Math.min(100, (user.points / 2000) * 100);

    return `
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm border border-blue-100">
            <div class="flex items-center justify-between">
                <div>
                    <h3 class="text-lg font-medium text-gray-900">Vos points de fidélité</h3>
                    <p class="text-3xl font-bold text-blue-600 mt-1">${user.points} <span class="text-lg font-normal text-gray-500">points</span></p>
                </div>
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <i class="fas fa-trophy text-2xl text-yellow-500"></i>
                </div>
            </div>
            <div class="mt-4">
                <div class="h-2 bg-blue-100 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style="width: ${progressPercentage}%"></div>
                </div>
                <p class="text-xs text-gray-500 mt-2 text-right">${user.points}/2000 points pour le niveau suivant</p>
            </div>
        </div>
    `;
}

/**
 * Display points section for citizen users
 * @param {Object} user - User data object
 */
function displayPointsForCitizen(user) {
    if (user.role === 'citizen' && user.points !== undefined) {
        const pointsSection = generatePointsSection(user);
        const mainElement = document.querySelector('main');

        if (mainElement) {
            mainElement.insertAdjacentHTML('afterbegin', pointsSection);
        }
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
    displayPointsForCitizen(user);
}

// Initialize the service
initializeAutoConnection();