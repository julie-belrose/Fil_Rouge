import { LocalStorageRepository } from '../../../infrastructure/LocalStorageRepository.js';
import { MOCK_AUTH } from '../../../../tests/mock/index.js';

const storageRepository = new LocalStorageRepository();

// Service d'authentification simulé
export const mockAuthService = {
    // Login simulé
    async login(email, password, selectedRole = null) {
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 500));

        // Vérifier dans MOCK_AUTH pour l'authentification
        const authUser = MOCK_AUTH.find(u => u.email === email && u.password === password);

        if (authUser) {
            // Permettre au rôle root d'accéder à tous les autres rôles
            if (authUser.role === 'root') {
                // Si c'est root, utiliser le rôle sélectionné ou garder root
                const finalRole = selectedRole || 'root';
                const userWithRole = { ...authUser, role: finalRole };

                const token = btoa(JSON.stringify({ id: authUser.id, email: authUser.email, role: finalRole, exp: Date.now() + 86400000 }));

                storageRepository.store('auth_token', token);
                storageRepository.store('user', userWithRole);

                return {
                    success: true,
                    token,
                    user: userWithRole
                };
            }

            // Vérifier si le rôle sélectionné correspond au rôle de l'utilisateur pour les non-root
            if (selectedRole && authUser.role !== selectedRole) {
                return {
                    success: false,
                    message: "Type de compte incorrect pour cet utilisateur"
                };
            }

            // Générer un faux token
            const token = btoa(JSON.stringify({ id: authUser.id, email: authUser.email, role: authUser.role, exp: Date.now() + 86400000 }));

            // Stocker le token et l'utilisateur
            storageRepository.store('auth_token', token);
            storageRepository.store('user', authUser);

            return {
                success: true,
                token,
                user: authUser
            };
        }

        return {
            success: false,
            message: "Email or password incorrect"
        };
    },

    // Logout
    logout() {
        storageRepository.remove('auth_token');
        storageRepository.remove('user');
        window.location.href = '/domains/auth/pages/login.html';
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

    getCurrentUser() {
        return storageRepository.get('user');
    }
};
