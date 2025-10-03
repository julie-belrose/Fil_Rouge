import { API_ROUTES } from '#core-frontend/constants/routes.js';
import { genericListView } from '#core-frontend/api/genericListView.js';
import { renderUserCard } from '#components/userCard.js';

class UserListElement extends HTMLElement {
    async connectedCallback() {

        // Loading state
        this.innerHTML = `
            <div class="text-center py-4">
                <div class="spinner"></div>
                Loading users...
            </div>`;

        try {
            // Container pour la liste
            this.innerHTML = `<div data-users-container></div>`;

            await genericListView({
                url: API_ROUTES.USERS,
                containerSelector: '[data-users-container]',
                renderFn: renderUserCard
            });

        } catch (error) {
            this.innerHTML = `
                <div class="error">
                    Error loading users
                </div>`;
        }
    }
}

customElements.define('user-list', UserListElement);


// export function showUsers(containerSelector = '#app') {
//   genericListView({
//     url: API_ROUTES.USERS,
//     containerSelector,
//     renderFn: renderUserCard
//   });
// }