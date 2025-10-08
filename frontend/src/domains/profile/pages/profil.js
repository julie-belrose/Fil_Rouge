import { ProfileService } from '../services/profileService.js';

document.addEventListener('DOMContentLoaded', () => {
    const profileService = new ProfileService();
    profileService.initializeProfile();
});