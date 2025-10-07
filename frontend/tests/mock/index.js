// Structure cohérente avec backend : table auth + users
export const MOCK_AUTH = [
    {
        id: 1,
        email: "citoyen@example.com",
        password: "demo123",
        first_name: "John",
        last_name: "Dupont",
        role: "citizen",
        is_active: true,
        created_at: "2024-01-01T00:00:00Z"
    },
    {
        id: 2,
        email: "agent@example.com",
        password: "agent123",
        first_name: "Arthur",
        last_name: "Morgan",
        role: "agent",
        is_active: true,
        created_at: "2024-01-01T00:00:00Z"
    },
    {
        id: 3,
        email: "admin@example.com",
        password: "admin123",
        first_name: "Grégoire",
        last_name: "Durand",
        role: "admin",
        is_active: true,
        created_at: "2024-01-01T00:00:00Z"
    },
    {
        id: 4,
        email: "root@example.com",
        password: "root123",
        first_name: "Root",
        last_name: "Admin",
        role: "root",
        is_active: true,
        created_at: "2024-01-01T00:00:00Z"
    }
];

export const MOCK_USERS = [
    {
        id: 1,
        auth_id: 1,
        pseudo: "john_dupont",
        district: "Lyon 3e",
        loyalty_points: 1240
    }
];

export const MOCK_AGENTS = [
    {
        id: 1,
        user_id: 2,
        agent_number: "A-12345",
        sector: "Centre-ville",
        center_id: 1,
        team_id: 1,
        created_by: 3
    }
];

export const MOCK_ADMINS = [
    {
        id: 1,
        user_id: 3,
        center_id: 1
    },
    {
        id: 2,
        user_id: 4,
        center_id: 1
    }
];

