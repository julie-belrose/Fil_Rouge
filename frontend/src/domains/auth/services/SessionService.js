import { LocalStorageRepository } from '../../../infrastructure/LocalStorageRepository.js';

export class SessionService {
    constructor() {
        this.storageRepository = new LocalStorageRepository();
    }

    storeSession(token, user) {
        this.storageRepository.store('auth_token', token);
        this.storageRepository.store('user', user);
    }

    isAuthenticated() {
        // Vérifier d'abord si le token existe (plus performant)
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
        // Vérifier d'abord si l'utilisateur existe avant de parser
        if (!this.storageRepository.has('user')) {
            return null;
        }
        return this.storageRepository.get('user');
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