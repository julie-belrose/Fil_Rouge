import { mockAuthService } from './mockAuthService.js';
import { SessionService } from './SessionService.js';

const sessionService = new SessionService();

// Vérifier si l'utilisateur est déjà connecté
if (sessionService.isAuthenticated() && sessionService.hasActiveSession()) {
    const user = sessionService.getCurrentUser();
    if (user) {
        // Rediriger vers le dashboard approprié
        switch(user.role) {
            case 'admin':
                window.location.href = '/domains/dashboard/pages/admin-dashbord.html';
                break;
            case 'agent':
                window.location.href = '/domains/dashboard/pages/agent-dashbord.html';
                break;
            case 'citizen':
                window.location.href = '/domains/dashboard/pages/user-dashbord.html';
                break;
            default:
                window.location.href = '/domains/dashboard/pages/user-dashbord.html';
        }
    }
}

// Auto-remplir pour le dev
document.getElementById('email').value = 'user@example.com';
document.getElementById('password').value = 'demo123';

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (!role) {
        showError('Veuillez sélectionner un rôle');
        return;
    }

    // Afficher un loader
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Connexion in progress...';

    try {
        const result = await mockAuthService.login(email, password, role);

        if (result.success) {
            switch(role) {
                case 'admin':
                    window.location.href = '/domains/dashboard/pages/admin-dashbord.html';
                    break;
                case 'agent':
                    window.location.href = '/domains/dashboard/pages/agent-dashbord.html';
                    break;
                case 'citizen':
                    window.location.href = '/domains/dashboard/pages/user-dashbord.html';
                    break;
                default:
                    window.location.href = '/domains/dashboard/pages/user-dashbord.html';
            }
        } else {
            showError(result.message || 'Connection error');
        }
    } catch (error) {
        console.error('Erreur:', error);
        showError('Connection error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});

function showError(message) {
    const existingError = document.getElementById('error-message');
    if (existingError) {
        existingError.remove();
    }

    const errorDiv = document.createElement('div');
    errorDiv.id = 'error-message';
    errorDiv.className = 'mt-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm';
    errorDiv.textContent = message;

    const form = document.getElementById('login-form');
    form.parentNode.insertBefore(errorDiv, form.nextSibling);

    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
