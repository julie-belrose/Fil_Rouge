/**
 * Service: Profile - Display Management
 *
 * Responsibility: Coordinate profile display using use cases
 * and managing DOM manipulation for profile-specific elements.
 *
 * This service:
 * - Calls use cases to retrieve data
 * - Updates profile-specific HTML elements
 * - Handles profile display errors
 * - Extends DashboardService for profile-specific needs
 *
 * NOTE: This service will be replaced by a React hook (useProfile)
 * when migrating to React. The use cases will remain unchanged.
 */
import { InitializeDashboardUseCase } from '../../dashboard/use-cases/initializeDashboardUseCase.js';

export class ProfileService {
    constructor() {
        this.initializeDashboardUseCase = new InitializeDashboardUseCase();
    }

    async initializeProfile() {
        try {
            const { displayData } = await this.initializeDashboardUseCase.execute();
            this.renderProfileData(displayData);
        } catch (error) {
            console.error('Failed to initialize profile:', error);
        }
    }

    renderProfileData(displayData) {
        // Header user info
        this.updateElement('userFirstname', displayData.firstname);
        this.updateHeaderAvatar(displayData.avatarUrl);

        // Profile specific elements
        this.updateElement('fullName', displayData.fullName);
        this.updateProfileAvatar(displayData.avatarUrl);
    }

    updateElement(elementId, content) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = content;
        }
    }

    updateHeaderAvatar(avatarUrl) {
        const avatarImg = document.querySelector('img[alt="Profile"]');
        if (avatarImg) {
            avatarImg.src = avatarUrl;
        }
    }

    updateProfileAvatar(avatarUrl) {
        const profileAvatar = document.getElementById('profileAvatar');
        if (profileAvatar) {
            // Update with larger size for profile page
            const largeAvatarUrl = avatarUrl.replace('&', '&size=128&');
            profileAvatar.src = largeAvatarUrl;
        }
    }
}