import {ErrorRedirectService} from "#domains-frontend/errors/services/errorRedirectService.js";
import {API_ROUTES} from "#core-frontend/constants/routes.js";

const errorRedirectService = new ErrorRedirectService();

/**
 * Fonction générique pour effectuer des appels API.
 * Gère l'authentification, les entêtes JSON, et la redirection des erreurs critiques.
 *
 * @param {string} url - L'URL de l'API à appeler.
 * @param {object} options - Options pour fetch (method, body, etc.).
 * @returns {Promise<object>} Les données JSON de la réponse en cas de succès.
 * @throws {Error} En cas d'erreur HTTP non gérée par la redirection ou erreur réseau.
 */
export async function apiClient(url, options = {}) {
    const token = localStorage.getItem('auth_token');

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    } else if (url !== API_ROUTES.AUTH.LOGIN && url !== API_ROUTES.AUTH.REGISTER) {
        errorRedirectService.redirectToErrorPage(401);
        throw new Error('Authentification requise');
    }

    const config = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            ...options.headers,
        },
    };

    try {
        const response = await fetch(url, config);
        if (response.ok) {
            return await response.json();
        }

        if (response.status === 404 || response.status === 401 || response.status === 403) {
            errorRedirectService.redirectToErrorPage(response.status);
            throw new Error(`Redirection déclenchée pour le statut HTTP ${response.status}`);
        }

        const errorData = await response.json().catch(() => ({ message: response.statusText }));
        throw new Error(`Erreur API ${response.status}: ${errorData.message || 'server error'}`);

    } catch (error) {
        throw new Error(error.message || 'Network connection error');
    }
}