/**
 * Use Case: Display User Information
 *
 * Responsibility: Generic use case to prepare user data for display (Formatting/Formatting).
 */
export class DisplayInfoUserUseCase {
    /**
     * @private
     * Construit le nom complet de l'utilisateur de manière sécurisée.
     */
    _getFullName(user) {
        const firstName = user?.first_name || '';
        const lastName = user?.last_name || '';
        return `${firstName} ${lastName}`.trim();
    }

    /**
     * @private
     * Génère le message d'accueil.
     */
    _getWelcomeMessage(user) {
        const firstName = user?.first_name || 'Utilisateur';
        return `Bienvenue ${firstName}`;
    }

    /**
     * @private
     * Génère l'URL de l'avatar basé sur le prénom et le nom.
     */
    _getAvatarUrl(user) {
        // Cette méthode est justifiée car elle gère la construction d'une URL externe.
        const name = this._getFullName(user).replace(/\s/g, '+') || 'UU';
        return `https://ui-avatars.com/api/?name=${name}&background=10b981&color=fff`;
    }

    /**
     * @private
     * Calcule les initiales de l'utilisateur.
     */
    _getInitials(user) {
        // Cette méthode est justifiée car elle gère la logique complexe (charAt, UU par défaut).
        const initial = (str) => str?.charAt(0) || '';
        const initials = `${initial(user?.first_name)}${initial(user?.last_name)}`;
        return initials || 'UU';
    }

    /**
     * Méthode principale : exécute le cas d'utilisation et retourne les données formatées.
     * @param {Object} user - Données utilisateur brutes.
     * @returns {{displayData: Object}} - Les données formatées.
     */
    execute(user) {
        if (!user) {
            throw new Error('User data is required');
        }

        return {
            displayData: {
                firstname: user.first_name,
                lastname: user.last_name,
                fullName: this._getFullName(user),
                welcomeMessage: this._getWelcomeMessage(user),
                avatarUrl: this._getAvatarUrl(user),
                initials: this._getInitials(user)
            }
        };
    }
}