import { fetchData } from '#core-frontend/api/fetchData.js';

export async function genericListView({ url, containerSelector, renderFn }) {
  try {
    const data = await fetchData({ url });

    const container = document.querySelector(containerSelector);
    container.innerHTML = '';

    data.forEach(item => {
      const element = renderFn(item);
      container.appendChild(element);
    });
  } catch (error) {
    console.error('Error loading data :', error);
    container.innerHTML = `<div class="error">Erreur de chargement</div>`;
  }
}