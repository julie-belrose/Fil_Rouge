export { MOCK_USERS } from './mockUsers.js';
export { MOCK_AGENTS } from './mockAgents.js';
export { MOCK_ADMINS } from './mockAdmins.js';

// Combined array for convenience
export const ALL_MOCK_USERS = [
    ...MOCK_USERS,
    ...MOCK_AGENTS,
    ...MOCK_ADMINS
];