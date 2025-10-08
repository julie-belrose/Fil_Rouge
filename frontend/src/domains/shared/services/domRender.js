import {InitializeDashboardDataUserUseCase} from "#shared-frontend/use-cases/initializeDashboardDataUserUseCase.js";

export class DomRender {

    //citizen/admin/agent
    renderUserData(displayData) {
        this.updateElement('userFirstname', displayData.firstname);
        this.updateElement('welcomeMessage', displayData.welcomeMessage);
        this.updateAvatar(displayData.avatarUrl);
    }

    //text
    updateElement(elementId, content) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = content;
        }
    }

    //avatar
    updateAvatar(avatarUrl) {
        const avatarImg = document.querySelector('img[alt="Profile"]');
        if (avatarImg) {
            avatarImg.src = avatarUrl;
        }
    }

}