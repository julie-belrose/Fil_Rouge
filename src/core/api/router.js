import { showUsers } from '#views/userListView.js';

/**
 * Routes configuration
 * key: route path
 * value: function to call
 * 
 */
const routes = {
  '/users': showUsers,
  //'/reports': showReports,
};

export function initRouter() {
  const path = window.location.pathname;
  const route = routes[path];

  if (route) route();
  else document.querySelector('#app').textContent = '404 Not Found';
}