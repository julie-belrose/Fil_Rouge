export class LoginUIManager {

    constructor(formId = 'login-form', statusId = 'status-message') {
        this.form = document.getElementById(formId);
        this.statusMessageId = statusId;
        this.originalButtonText = null;
    }

    // --- Gestion of messages ---
    _clearStatusMessage() {
        const existingMessage = document.getElementById(this.statusMessageId);
        if (existingMessage) {
            existingMessage.remove();
        }
    }

    _displayStatus(message, className) {
        this._clearStatusMessage();

        const messageDiv = document.createElement('div');
        messageDiv.id = this.statusMessageId;
        messageDiv.className = `mt-4 p-3 rounded-lg border text-sm ${className}`;
        messageDiv.textContent = message;

        if (this.form) {
            this.form.parentNode.insertBefore(messageDiv, this.form.nextSibling);
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    showError(message) {
        this._displayStatus(message, 'bg-red-50 text-red-700 border-red-200');
    }

    /**
     * Affiche un message d'erreur dans le formulaire
     */
    showError(message) {
        this._clearStatusMessage();

        const errorDiv = document.createElement('div');
        errorDiv.id = 'status-message';
        errorDiv.className = 'mt-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm';
        errorDiv.textContent = message;

        const form = document.getElementById('login-form');
        form.parentNode.insertBefore(errorDiv, form.nextSibling);

        errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    /**
     * Affiche un message de succès dans le formulaire
     */
    showSuccess(message) {
        this._clearStatusMessage()
        const successDiv = document.createElement('div');
        successDiv.id = 'status-message';
        this._displayStatus(message, 'mt-4 p-3 bg-green-50 text-green-700 rounded-lg border border-green-200 text-sm');

        const form = document.getElementById('login-form');
        form.parentNode.insertBefore(successDiv, form.nextSibling);

        successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // --- Gestion du formulaire ---

    showLoginForm() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('login-container').style.display = 'block';
    }

    changeTextButton(submitBtn) {
        if (submitBtn) {
            this.originalButtonText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Connexion in progress...';
        }
    }

    resetDisplayButton(submitBtn) {
        if (submitBtn && this.originalButtonText) {
            submitBtn.disabled = false;
            submitBtn.textContent = this.originalButtonText;
        }
    }

    getResultOfConnexion(result){
        if (result.success) {
            this.showSuccess('Connexion réussie');
            this.redirectToDashboard(role);
            return true;
        } else {
            this.showError(result.message || 'Erreur de connexion');
            return false;
        }
    };
}