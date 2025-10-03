export const BASE_API_URL =
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_BASE_API_URL) || 'http://localhost:3000/api';

export const API_ROUTES = {
    AUTH: {
        LOGIN: `${BASE_API_URL}/auth/login`,
        LOGOUT: `${BASE_API_URL}/auth/logout`,
        REGISTER: `${BASE_API_URL}/auth/register`,
        PROFILE: `${BASE_API_URL}/auth/profile`
    },
    REPORTS: {
        LIST: `${BASE_API_URL}/reports`,
        CREATE: `${BASE_API_URL}/reports`,
        DETAILS: (id) => `${BASE_API_URL}/reports/${id}`,
        UPDATE: (id) => `${BASE_API_URL}/reports/${id}`,
        DELETE: (id) => `${BASE_API_URL}/reports/${id}`
    },
    USERS: {
        LIST: `${BASE_API_URL}/users`,
        DETAILS: (id) => `${BASE_API_URL}/users/${id}`,
        CREATE: `${BASE_API_URL}/users`,
        UPDATE: (id) => `${BASE_API_URL}/users/${id}`,
        DELETE: (id) => `${BASE_API_URL}/users/${id}`
    }
};

export const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
};


