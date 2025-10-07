window.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('auth_token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    setTimeout(() => {
        if (!token) {
            // Redirection vers la page de login
            window.location.href = 'http://localhost:3000/domains/auth/pages/login.html';
        } else {
            switch (user.role) {
                case 'admin':
                    window.location.href = 'http://localhost:3000/domains/dashboard/pages/admin-dashbord.html';
                    break;
                case 'agent':
                    window.location.href = 'http://localhost:3000/domains/dashboard/pages/agent-dashbord.html';
                    break;
                default:
                    window.location.href = 'http://localhost:3000/domains/dashboard/pages/user-dashbord.html';
            }
        }
    }, 1000);
});