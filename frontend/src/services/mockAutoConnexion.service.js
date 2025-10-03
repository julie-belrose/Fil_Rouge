import { mockAuthService } from './mockAuthService.js';
import { checkAuth } from './authGuard.js';

// Vérifier l'authentification
if (!checkAuth()) {
    // Redirection automatique vers la page de connexion
    window.location.href = '/auth/login.html';
} else {
    // Charger les données utilisateur
    const user = mockAuthService.getCurrentUser();

    // Mettre à jour l'interface utilisateur
    document.getElementById('user-name').textContent = user.name || 'Utilisateur';
    document.getElementById('user-greeting').textContent = user.name ? user.name.split(' ')[0] : 'Utilisateur';

    // Gestion de la déconnexion
    document.getElementById('logout-btn').addEventListener('click', (e) => {
        e.preventDefault();
        mockAuthService.logout();
    });

    // Afficher les points si c'est un citoyen
    if (user.role === 'citizen' && user.points !== undefined) {
        const pointsSection = `
                    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm border border-blue-100">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-lg font-medium text-gray-900">Vos points de fidélité</h3>
                                <p class="text-3xl font-bold text-blue-600 mt-1">${user.points} <span class="text-lg font-normal text-gray-500">points</span></p>
                            </div>
                            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                <i class="fas fa-trophy text-2xl text-yellow-500"></i>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="h-2 bg-blue-100 rounded-full overflow-hidden">
                                <div class="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style="width: ${Math.min(100, (user.points / 2000) * 100)}%"></div>
                            </div>
                            <p class="text-xs text-gray-500 mt-2 text-right">${user.points}/2000 points pour le niveau suivant</p>
                        </div>
                    </div>
                `;

        // Ajouter la section des points au début du main
        document.querySelector('main').insertAdjacentHTML('afterbegin', pointsSection);
    }
}