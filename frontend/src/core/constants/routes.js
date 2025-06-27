export const BASE_API_URL =
    import.meta.env.VITE_BASE_API_URL || 'http://localhost:3000/api';

export const API_ROUTES = {
    USERS: `${BASE_API_URL}/users`, 
    REPORTS: `${BASE_API_URL}/reports`,
};

export const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
};

