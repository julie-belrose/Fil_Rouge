document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll("#waste-list li");
  
  listItems.forEach(item => {
    item.addEventListener("click", () => {
      const wasteName = item.getAttribute("data-name");
      window.location.href = `/details?name=${encodeURIComponent(wasteName)}`;
    });
  });
  });