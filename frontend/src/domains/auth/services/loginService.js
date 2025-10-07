import { mockAuthService } from './mockAuthService.js';
import { SessionService } from './SessionService.js';
import { FRONTEND_ROUTES } from '../../../core/constants/routes.js';

const sessionService = new SessionService();

function redirectToDashboard(role) {
    switch(role) {
        case 'admin':
            window.location.href = FRONTEND_ROUTES.DASHBOARD.ADMIN;
            break;
        case 'agent':
            window.location.href = FRONTEND_ROUTES.DASHBOARD.AGENT;
            break;
        case 'citizen':
            window.location.href = FRONTEND_ROUTES.DASHBOARD.USER;
            break;
        default:
            window.location.href = FRONTEND_ROUTES.AUTH.LOGIN;
    }
}

// Fonction pour afficher le formulaire
function showLoginForm() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

// Vérification de session au chargement
console.error('[LOGIN] Loading loginService.js');
console.error('[LOGIN] Checking authentication...', {
    isAuthenticated: sessionService.isAuthenticated(),
    hasActiveSession: sessionService.hasActiveSession()
});

if (sessionService.isAuthenticated() && sessionService.hasActiveSession()) {
    console.error('[LOGIN] User has valid session - showing form');
    // Si l'utilisateur a déjà une session valide, on affiche le formulaire
    // Il peut choisir de se reconnecter ou d'aller ailleurs
    showLoginForm();
} else {
    console.error('[LOGIN] No valid session - clearing and showing form');
    // Si le token est expiré, nettoyer la session
    sessionService.clearSession();
    showLoginForm();
}

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
            redirectToDashboard(role);
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
    const existingMessage = document.getElementById('status-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const errorDiv = document.createElement('div');
    errorDiv.id = 'status-message';
    errorDiv.className = 'mt-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm';
    errorDiv.textContent = message;

    const form = document.getElementById('login-form');
    form.parentNode.insertBefore(errorDiv, form.nextSibling);

    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showSuccess(message) {
    const existingMessage = document.getElementById('status-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const successDiv = document.createElement('div');
    successDiv.id = 'status-message';
    successDiv.className = 'mt-4 p-3 bg-green-50 text-green-700 rounded-lg border border-green-200 text-sm';
    successDiv.textContent = message;

    const form = document.getElementById('login-form');
    form.parentNode.insertBefore(successDiv, form.nextSibling);

    successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
