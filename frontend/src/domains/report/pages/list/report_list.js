import { GetAllReportsUseCase } from '../../usecases/GetAllReportsUseCase.js';

const getAllReportsUseCase = new GetAllReportsUseCase();

document.addEventListener("DOMContentLoaded", () => {
  fetchReports();
});

// Récupération signalements
async function fetchReports() {
  const result = await getAllReportsUseCase.execute();

  if (result.success) {
    renderReportsTable(result.data);
  } else {
    showError(result.error);
  }
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
  tr.className = "hover:bg-slate-700/30 transition-colors";
  tr.innerHTML = `
    <td class="px-6 py-4 text-slate-300 font-medium">${report.id}</td>
    <td class="px-6 py-4 text-slate-300">${report.location || ""}</td>
    <td class="px-6 py-4 text-slate-300">${report.description || ""}</td>
    <td class="px-6 py-4 text-slate-300">${report.waste_type || ""}</td>
    <td class="px-6 py-4 text-slate-300">${report.formattedDate}</td>
    <td class="px-6 py-4">
      <span class="px-3 py-1 text-xs font-semibold rounded-full ${getStatusClasses(report.status)}">
        ${report.statusLabel}
      </span>
    </td>
  `;
  return tr;
}

function getStatusClasses(status) {
  switch (status) {
    case 'resolved':
      return 'bg-primary-100 text-primary-800';
    case 'in_progress':
      return 'bg-accent-100 text-accent-800';
    case 'pending':
      return 'bg-slate-100 text-slate-800';
    default:
      return 'bg-slate-100 text-slate-800';
  }
}

// Message d'info
function showInfo(message) {
  const alert = document.getElementById("alert");
  alert.style.display = "block";
  alert.innerHTML = `<div class='bg-accent-100 border border-accent-400 text-accent-700 px-4 py-3 rounded mb-4'>${message}</div>`;
}

// Message d'erreur
function showError(message = "Erreur de chargement des signalements") {
  const alert = document.getElementById("alert");
  alert.style.display = "block";
  alert.innerHTML = `<div class='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>${message}</div>`;
}
