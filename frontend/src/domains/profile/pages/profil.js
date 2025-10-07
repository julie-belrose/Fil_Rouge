import { ProfileService } from '../services/ProfileService.js';

document.addEventListener('DOMContentLoaded', () => {
    const profileService = new ProfileService();
    profileService.initializeProfile();
});