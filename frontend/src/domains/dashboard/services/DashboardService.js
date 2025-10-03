/**
 * Service: Dashboard - Display Management
 *
 * Responsibility: Coordinate dashboard display using use cases
 * and managing DOM manipulation.
 *
 * This service:
 * - Calls use cases to retrieve data
 * - Updates HTML elements with user data
 * - Handles display errors
 * - Provides utility methods for DOM manipulation
 *
 * NOTE: This service will be replaced by a React hook (useDashboard)
 * when migrating to React. The use cases will remain unchanged.
 */
import { InitializeDashboardUseCase } from '../use-cases/InitializeDashboardUseCase.js';

export class DashboardService {
    constructor() {
        this.initializeDashboardUseCase = new InitializeDashboardUseCase();
    }

    async initializeUserDashboard() {
        try {
            const { displayData } = await this.initializeDashboardUseCase.execute();
            this.renderUserData(displayData);
        } catch (error) {
            console.error('Failed to initialize dashboard:', error);
        }
    }

    renderUserData(displayData) {
        this.updateElement('userFirstname', displayData.firstname);
        this.updateElement('welcomeMessage', displayData.welcomeMessage);
        this.updateAvatar(displayData.avatarUrl);
    }

    updateElement(elementId, content) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = content;
        }
    }

    updateAvatar(avatarUrl) {
        const avatarImg = document.querySelector('img[alt="Profile"]');
        if (avatarImg) {
            avatarImg.src = avatarUrl;
        }
    }
}