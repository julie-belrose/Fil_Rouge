export function renderUserCard(user) {
    const renderUserCard = document.createElement('div');
    renderUserCard.className = 'user-card';

    renderUserCard.innerHTML = `
    <h2>${user.first_name || ''} ${user.last_name || ''}</h2>
    <p><strong>Pseudo:</strong> ${user.pseudo || 'N/A'}</p>
    <p><strong>District:</strong> ${user.district || 'Non renseigné'}</p>
    <p><strong>Points de fidélité:</strong> ${user.loyalty_points}</p>
  `;

    return renderUserCard;
}
