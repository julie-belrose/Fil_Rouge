import { LocalStorageRepository } from '../infrastructure/LocalStorageRepository.js';
import { ALL_MOCK_USERS } from '../../tests/mock/index.js';

const storageRepository = new LocalStorageRepository();

// Service d'authentification simulé
export const mockAuthService = {
    // Login simulé
    async login(email, password, selectedRole = null) {
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 500));

        const user = ALL_MOCK_USERS.find(u => u.email === email && u.password === password);

        if (user) {
            // Vérifier si le rôle sélectionné correspond au rôle de l'utilisateur
            if (selectedRole && user.role !== selectedRole) {
                return {
                    success: false,
                    message: "Type de compte incorrect pour cet utilisateur"
                };
            }

            // Générer un faux token
            const token = btoa(JSON.stringify({ id: user.id, email: user.email, role: user.role, exp: Date.now() + 86400000 }));

            // Stocker le token et l'utilisateur
            storageRepository.store('auth_token', token);
            storageRepository.store('user', user);

            return {
                success: true,
                token,
                user
            };
        }

        return {
            success: false,
            message: "Email ou mot de passe incorrect"
        };
    },

    // Logout
    logout() {
        storageRepository.remove('auth_token');
        storageRepository.remove('user');
        window.location.href = '/auth/login.html';
    },

    // Vérifier si connecté
    isAuthenticated() {
        const token = storageRepository.get('auth_token');
        if (!token) return false;

        try {
            const decoded = JSON.parse(atob(token));
            return decoded.exp > Date.now();
        } catch {
            return false;
        }
    },

    // Obtenir l'utilisateur actuel
    getCurrentUser() {
        return storageRepository.get('user');
    }
};
