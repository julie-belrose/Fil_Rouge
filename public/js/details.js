document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");

  if (name) {
    document.getElementById("waste-name").textContent = name;
  } else {
    document.getElementById("waste-name").textContent = "(non spécifié)";
  }
});
