import { mockAuthService } from './mockAuthService.js';

// Auto-remplir pour le dev
document.getElementById('email').value = 'user@example.com';
document.getElementById('password').value = 'demo123';

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;

    if (!userType) {
        showError('Please select a user type');
        return;
    }

    // Afficher un loader
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Connexion in progress...';

    try {
        const result = await mockAuthService.login(email, password, userType);

        if (result.success) {
            switch(userType) {
                case 'admin':
                    window.location.href = '../dashbord/admin-dashbord.html';
                    break;
                case 'agent':
                    window.location.href = '../dashbord/agent-dashbord.html';
                    break;
                case 'citizen':
                    window.location.href = '../dashbord/user-dashbord.html';
                    break;
                default:
                    window.location.href = '../dashbord/user-dashbord.html';
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

window.quickLogin = function(email, password) {
    document.getElementById('email').value = email;
    document.getElementById('password').value = password;

    let userType = 'citizen';
    if (email === 'admin@example.com') {
        userType = 'admin';
    } else if (email === 'agent@example.com') {
        userType = 'agent';
    }

    document.getElementById('userType').value = userType;
    document.getElementById('login-form').dispatchEvent(new Event('submit'));
}