
// --- MOCK minimal pour avancer sans backend ---
const MOCK_ASSIGNED = [
  {
    _id: "m1",
    ref: "REP-00123",
    title: "Dépôt sauvage",
    status: "in_progress",
    address: "12 rue des Lilas, Lyon",
    assignedAt: "2025-09-28T10:15:00Z",
    agent_id: "AGENT_DEMO",
  },
  {
    _id: "m2",
    ref: "REP-00124",
    title: "Conteneur débordant",
    status: "pending",
    address: "Place Bellecour, Lyon",
    assignedAt: "2025-09-30T08:00:00Z",
    agent_id: "AGENT_DEMO",
  },
  {
    _id: "m3",
    ref: "REP-00125",
    title: "Bac cassé",
    status: "resolved",
    address: "3 avenue du Parc, Lyon",
    assignedAt: "2025-09-20T16:30:00Z",
    agent_id: "AUTRE_AGENT",
  },
];

// Récup "l'agent courant" (en attendant la vraie auth fonctionnelle)
function getCurrentAgentId() {
  return localStorage.getItem("agent_id") || "AGENT_DEMO";
}

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleString();
}

function renderRows(items) {
  const tbody = document.querySelector("#assignedTable tbody");
  const empty = document.getElementById("assignedEmpty");
  tbody.innerHTML = "";

  if (!items || items.length === 0) {
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  for (const r of items) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.ref || r._id}</td>
      <td>${r.title || r.label || "(sans titre)"}</td>
      <td>${r.status || "-"}</td>
      <td>${r.address || r.location?.address || "-"}</td>
      <td>${formatDate(r.assignedAt)}</td>
    `;
    tbody.appendChild(tr);
  }
}

async function loadAndRender() {
  const agentId = getCurrentAgentId();

  // backend plus tard → tentative fetch, sinon mock
  let items = [];
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 1200);
    const res = await fetch(`/api/reports/assigned?agentId=${encodeURIComponent(agentId)}`, { signal: ctrl.signal });
    clearTimeout(t);
    if (res.ok) {
      const data = await res.json();
      items = Array.isArray(data) ? data : (Array.isArray(data?.items) ? data.items : []);
    }
  } catch (e) {
    // pas important, passage au mock
  }
  if (!items || items.length === 0) {
    items = MOCK_ASSIGNED.filter(r => r.agent_id === agentId);
  }

  // filtres UI
  const status = document.getElementById("statusFilter").value.trim().toLowerCase();
  const q = document.getElementById("searchInput").value.trim().toLowerCase();

  if (status) items = items.filter(i => (i.status || "").toLowerCase() === status);
  if (q) {
    items = items.filter(i => {
      const blob = `${i.ref || ""} ${i.title || ""} ${i.label || ""} ${i.address || ""} ${i.location?.address || ""}`.toLowerCase();
      return blob.includes(q);
    });
  }

  renderRows(items);
}

function initEvents() {
  document.getElementById("statusFilter").addEventListener("change", loadAndRender);
  document.getElementById("searchInput").addEventListener("input", loadAndRender);
}

document.addEventListener("DOMContentLoaded", async () => {
  initEvents();
  await loadAndRender();
});
