import { LocalStorageRepository } from '../../../infrastructure/localStorageRepository.js';
import { MOCK_USERS, MOCK_AGENTS, MOCK_ADMINS } from '../../../../tests/mock/index.js';

export class SessionService {
    constructor() {
        this.storageRepository = new LocalStorageRepository();
    }

    storeSession(token, user) {
        this.storageRepository.store('auth_token', token);
        this.storageRepository.store('user', user);
    }

    isAuthenticated() {
        if (!this.storageRepository.has('auth_token')) {
            return false;
        }

        const token = this.storageRepository.get('auth_token');
        try {
            const decoded = JSON.parse(atob(token));
            return decoded.exp > Date.now();
        } catch {
            return false;
        }
    }

    getCurrentUser() {
        if (!this.storageRepository.has('user')) {
            return null;
        }
        return this.storageRepository.get('user');
    }

    // Fonction intermédiaire pour fusionner auth et user data
    getCurrentUserWithProfile() {
        const authUser = this.getCurrentUser();
        if (!authUser) return null;

        // Récupérer les données spécifiques selon le rôle
        let userData = null;
        if (authUser.role === 'citizen') {
            userData = MOCK_USERS.find(user => user.user_id === authUser.id);
        } else if (authUser.role === 'agent') {
            userData = MOCK_AGENTS.find(agent => agent.user_id === authUser.id);
        } else if (authUser.role === 'admin' || authUser.role === 'root') {
            userData = MOCK_ADMINS.find(admin => admin.user_id === authUser.id);
        }

        // Fusionner les données auth + données spécifiques
        return {
            ...authUser,
            ...(userData && userData)
        };
    }

    getToken() {
        return this.storageRepository.get('auth_token');
    }

    clearSession() {
        this.storageRepository.remove('auth_token');
        this.storageRepository.remove('user');
    }

    hasActiveSession() {
        return this.storageRepository.has('auth_token') && this.storageRepository.has('user');
    }
}