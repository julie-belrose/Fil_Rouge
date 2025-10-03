// formatage date en fr-Fr
export function formatDate(DateString){
    if (!DateString) return '';

    return new Date(DateString).toLocaleDateString();

}

// retour couleur bage Bootstrap par statut
export function getStatusColor(status) {
    if (status === 'resolved') return 'success';
    if (status === 'in_progress') return 'warning';
    return 'secondary';
}