import { API_ROUTES } from '#core-frontend/constants/routes.js';
import { genericListView } from '#core-frontend/api/genericListView.js';
import { renderUserCard } from '#components/userCard.js';

export function showUsers() {
  genericListView({
    url: API_ROUTES.USERS,
    containerSelector: '#app',
    renderFn: renderUserCard
  });
}