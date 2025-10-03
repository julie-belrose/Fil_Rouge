document.addEventListener("DOMContentLoaded", () => {
  fetchReports();
});

// Récupération signalements
function fetchReports() {
  fetch("/reports")
    .then(response => response.json())
    .then(renderReportsTable)
    .catch(showError);
}

// Générer tableau de signalements
function renderReportsTable(reports) {
  const tbody = document.querySelector("#reportsTable tbody");
  tbody.innerHTML = "";

  if (!reports.length) {
    showInfo("Aucun signalement.");
    return;
  }

  reports.forEach(report => {
    tbody.appendChild(createReportRow(report));
  });
}

// Création une ligne tableau -> un signalement
function createReportRow(report) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${report.id}</td>
    <td>${report.location || ""}</td>
    <td>${report.description || ""}</td>
    <td>${report.waste_type || ""}</td>
    <td>${formatDate(report.creation_date)}</td>
    <td>
      <span class="badge bg-${getStatusColor(report.status)}">
        ${report.status}
      </span>
    </td>
  `;
  return tr;
}


function formatDate(dateString) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("fr-FR");
}


function getStatusColor(status) {
  if (status === 'resolved') return 'success';
  if (status === 'in_progress') return 'warning';
  return 'secondary';
}

// Message d’info
function showInfo(message) {
  const alert = document.getElementById("alert");
  alert.style.display = "block";
  alert.innerHTML = `<div class='alert alert-info'>${message}</div>`;
}

// Message d’erreur
function showError() {
  const alert = document.getElementById("alert");
  alert.style.display = "block";
  alert.innerHTML = "<div class='alert alert-danger'>Erreur de chargement des signalements</div>";
}
