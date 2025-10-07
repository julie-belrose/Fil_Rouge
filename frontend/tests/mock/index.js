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
    },
    {
        id: 5,
        email: "admin2@example.com",
        password: "admin456",
        first_name: "Marie",
        last_name: "Leclerc",
        role: "admin",
        is_active: true,
        created_at: "2024-01-01T00:00:00Z"
    }
];

export const MOCK_USERS = [
    {
        id: 1,
        user_id: 1,
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
    },
    {
        id: 3,
        user_id: 5,
        center_id: 1
    }
];

export const MOCK_ADMIN_REQUEST = [
    {
        id: 1,
        hashed_token: 'hashed_token_greg',
        related_user_id: 3,
        status: 'CONFIRMED',
        created_at: '2024-01-01T00:00:00Z',
        expires_at: '2025-12-31T23:59:59Z'
    },
    {
        id: 2,
        hashed_token: 'hashed_token_root',
        related_user_id: 4,
        status: 'PENDING',
        created_at: '2024-01-01T00:00:00Z',
        expires_at: '2025-12-31T23:59:59Z'
    },
    {
        id: 3,
        hashed_token: 'hashed_token_marie',
        related_user_id: 5,
        status: 'PENDING',
        created_at: '2024-01-01T00:00:00Z',
        expires_at: '2025-12-31T23:59:59Z'
    }
];

export const MOCK_REPORTS = [
    {
        id: 1,
        location: "Place Bellecour, Lyon",
        description: "Déchets plastiques abandonnés près des bancs",
        waste_type: "Plastique",
        creation_date: "2024-10-01T10:30:00Z",
        status: "pending",
        user_id: 1,
        latitude: 45.7578,
        longitude: 4.8320
    },
    {
        id: 2,
        location: "Parc de la Tête d'Or, Lyon",
        description: "Bouteilles en verre cassées près du lac",
        waste_type: "Verre",
        creation_date: "2024-10-02T14:15:00Z",
        status: "in_progress",
        user_id: 1,
        latitude: 45.7740,
        longitude: 4.8584
    },
    {
        id: 3,
        location: "Rue de la République, Lyon",
        description: "Déchets alimentaires dans les poubelles débordantes",
        waste_type: "Organique",
        creation_date: "2024-10-03T09:45:00Z",
        status: "resolved",
        user_id: 1,
        latitude: 45.7640,
        longitude: 4.8357
    },
    {
        id: 4,
        location: "Gare Part-Dieu, Lyon",
        description: "Papiers et emballages abandonnés sur les quais",
        waste_type: "Papier",
        creation_date: "2024-10-04T16:20:00Z",
        status: "pending",
        user_id: 1,
        latitude: 45.7603,
        longitude: 4.8583
    },
    {
        id: 5,
        location: "Vieux Lyon",
        description: "Déchets électroniques abandonnés dans une ruelle",
        waste_type: "Électronique",
        creation_date: "2024-10-05T11:00:00Z",
        status: "in_progress",
        user_id: 1,
        latitude: 45.7640,
        longitude: 4.8270
    }
];

