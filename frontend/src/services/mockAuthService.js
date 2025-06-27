// Données utilisateurs en dur pour le développement
const MOCK_USERS = [
    {
        id: 1,
        email: "user@example.com",
        password: "demo123",
        role: "citizen",
        name: "Alex Dupont",
        points: 1240,
        district: "Lyon 3e"
    },
    {
        id: 2,
        email: "agent@example.com",
        password: "agent123",
        role: "agent",
        name: "Arthur Morgan",
        agentId: "A-12345"
    },
    {
        id: 3,
        email: "admin@example.com",
        password: "admin123",
        role: "admin",
        name: "Admin System"
    }
];

// Service d'authentification simulé
export const mockAuthService = {
    // Login simulé
    async login(email, password, selectedRole = null) {
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 500));

        const user = MOCK_USERS.find(u => u.email === email && u.password === password);

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

            // Stocker dans localStorage
            localStorage.setItem('auth_token', token);
            localStorage.setItem('user', JSON.stringify(user));

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
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user');
        window.location.href = '/auth/login.html';
    },

    // Vérifier si connecté
    isAuthenticated() {
        const token = localStorage.getItem('auth_token');
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
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    }
};
