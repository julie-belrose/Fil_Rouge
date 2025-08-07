document.addEventListener("DOMContentLoaded", () => {
  fetch("/reports")
      .then(response => response.json())
      .then(reports => {
        const tbody = document.querySelector("#reportsTable tbody");
        tbody.innerHTML = "";

        if (!reports.length) {
          document.getElementById("alert").style.display = "block";
          document.getElementById("alert").innerHTML = "<div class='alert alert-info'>Aucun signalement.</div>";
          return;
        }

        reports.forEach(report => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
          <td>${report.id}</td>
          <td>${report.location || ""}</td>
          <td>${report.description || ""}</td>
          <td>${report.waste_type || ""}</td>
          <td>${report.creation_date ? new Date(report.creation_date).toLocaleDateString("fr-FR") : ""}</td>
          <td>
            <span class="badge bg-${report.status === 'resolved' ? 'success' : report.status === 'in_progress' ? 'warning' : 'secondary'}">
              ${report.status}
            </span>
          </td>
        `;
          tbody.appendChild(tr);
        });
      })
      .catch(err => {
        document.getElementById("alert").style.display = "block";
        document.getElementById("alert").innerHTML = "<div class='alert alert-danger'>Erreur de chargement des signalements</div>";
      });
});
