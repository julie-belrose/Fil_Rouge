import { LocalStorageRepository } from '../../../infrastructure/localStorageRepository.js';
import { MOCK_AUTH, MOCK_ADMIN_REQUEST } from '../../../../tests/mock/index.js';

const storageRepository = new LocalStorageRepository();

// Fonction helper pour vérifier l'approbation admin
function checkAdminRequestApproval(userId) {
    const adminRequest = MOCK_ADMIN_REQUEST.find(request =>
        request.related_user_id === userId &&
        request.status === 'CONFIRMED' &&
        new Date(request.expires_at) > new Date()
    );
    return adminRequest !== undefined;
}

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
                // Si c'est root, utiliser le rôle sélectionné ou admin par défaut
                const finalRole = selectedRole || 'admin';
                const userWithRole = { ...authUser, role: finalRole };

                const token = btoa(JSON.stringify({ id: authUser.id, email: authUser.email, role: finalRole, exp: Date.now() + 120000 }));

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

            // Vérifier l'approbation pour les admins (root n'a pas besoin d'approbation)
            if (authUser.role === 'admin' && !checkAdminRequestApproval(authUser.id)) {
                return {
                    success: false,
                    message: "Votre demande d'administration n'a pas encore été confirmée ou a expiré"
                };
            }

            // Générer un faux token (2 minutes pour test)
            const token = btoa(JSON.stringify({ id: authUser.id, email: authUser.email, role: authUser.role, exp: Date.now() + 120000 }));

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
