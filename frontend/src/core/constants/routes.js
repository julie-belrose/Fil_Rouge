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

export const FRONTEND_ROUTES = {
    AUTH: {
        LOGIN: '/domains/auth/pages/login.html',
        REGISTER: '/domains/auth/pages/register.html',
        FORGOT_PASSWORD: '/domains/auth/pages/forgot-password.html'
    },
    DASHBOARD: {
        ADMIN: '/domains/dashboard/pages/admin-dashbord.html',
        AGENT: '/domains/dashboard/pages/agent-dashbord.html',
        USER: '/domains/dashboard/pages/user-dashbord.html'
    },
    ERRORS: {
        NOT_FOUND: '/domains/errors/pages/404_page.html'
    }
};


