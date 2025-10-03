import { escapeHtml } from '#utils/sanitize.utils.js';

export function renderUserCard(user) {
    const renderUserCard = document.createElement('div');
    renderUserCard.className = 'user-card';

    renderUserCard.innerHTML = `
    <h2>${escapeHtml(user.first_name || '')} ${escapeHtml(user.last_name || '')}</h2>
    <p><strong>Pseudo:</strong> ${escapeHtml(user.pseudo || 'N/A')}</p>
    <p><strong>District:</strong> ${escapeHtml(user.district || 'Non renseigné')}</p>
    <p><strong>Points de fidélité:</strong> ${escapeHtml(user.loyalty_points)}</p>
  `;

    return renderUserCard;
}
