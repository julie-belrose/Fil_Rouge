import { ProfileService } from '../../domains/profile/services/ProfileService.js';

document.addEventListener('DOMContentLoaded', () => {
    const profileService = new ProfileService();
    profileService.initializeProfile();
});