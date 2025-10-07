import {API_ROUTES, HTTP_METHODS} from "#core/constants/routes.js";

export class ErrorRedirectService {
    /**
     * Redirect user to home page error
     * @param {number} statusCode statut code error HTTP
     */
    redirectToErrorPage(statusCode) {
        // Optionnel : vous pouvez gérer différents codes ici
        switch (statusCode) {
            case 404:
                // C'est l'action correcte : changer l'URL du navigateur.
                window.location.href = FRONTEND_ROUTES.ERRORS.NOT_FOUND;
                break;
            case 403:
               window.location.href = FRONTEND_ROUTES.ERRORS.FORBIDDEN;
               break;
            case 401:
                window.location.href = FRONTEND_ROUTES.ERRORS.NOT_AUTHORIZED;
                break;
            default:
                window.location.href = FRONTEND_ROUTES.ERRORS.NOT_FOUND;
        }
    }
}