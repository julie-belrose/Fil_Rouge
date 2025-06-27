module.exports = async function (db) {
  // RESET
  await db.collection('treatment_center').deleteMany({});
  await db.collection('report').deleteMany({});
  await db.collection('notification').deleteMany({});

  // TREATMENT CENTERS
  await db.collection('treatment_center').insertMany([
    {
      center_id: 101,
      name: 'Centre de Traitement Senia',
      zone_covered: 'Lyon-Sud',
      location: { lat: 35.628, lng: -0.550 },
      collection_calendar: [
        { waste_type: 'plastique', collection_date: '2025-08-10T08:00:00Z' }
      ],
      notes: 'Zone industrielle très active'
    },
    {
      center_id: 102,
      name: 'Centre de Tri Saxe',
      zone_covered: 'Lyon-Ouest',
      location: { lat: 35.695, lng: -0.620 },
      collection_calendar: [
        { waste_type: 'papier', collection_date: '2025-08-11T09:00:00Z' }
      ],
      notes: 'Zone résidentielle'
    },
    {
      center_id: 103,
      name: 'Station de Traitement Jira',
      zone_covered: 'Oran-Est',
      location: { lat: 35.723, lng: -0.570 },
      collection_calendar: [
        { waste_type: 'métal', collection_date: '2025-08-12T10:00:00Z' }
      ],
      notes: 'Près du campus universitaire'
    },
    {
      center_id: 104,
      name: 'Centre Communal Parma',
      zone_covered: 'Périphérie Sud',
      location: { lat: 35.603, lng: -0.480 },
      collection_calendar: [
        { waste_type: 'verre', collection_date: '2025-08-13T11:00:00Z' }
      ],
      notes: 'Nouveau centre intégré'
    }
  ]);

  // REPORTS (signalements)
  await db.collection('report').insertMany([
    {
      user_id: 501,
      agent_id: 301,
      assigned_by: 101,
      assigned_team: { id: 1, name: 'Équipe verte Lyon Sud', center_id: 101 },
      status: 'en cours',
      status_history: [
        { status: 'nouveau', updated_by: 101, date: '2025-08-01T08:00:00Z' },
        { status: 'en cours', updated_by: 301, date: '2025-08-02T10:00:00Z' }
      ],
      location: { lat: 35.630, lng: -0.545 },
      created_at: '2025-08-01T07:30:00Z'
    },
    {
      user_id: 502,
      agent_id: 302,
      assigned_by: 102,
      assigned_team: { id: 2, name: 'Équipe bleue Lyon Ouest', center_id: 102 },
      status: 'traité',
      status_history: [
        { status: 'nouveau', updated_by: 102, date: '2025-08-01T09:00:00Z' },
        { status: 'traité', updated_by: 302, date: '2025-08-03T11:00:00Z' }
      ],
      location: { lat: 35.698, lng: -0.622 },
      created_at: '2025-08-01T08:30:00Z'
    },
    {
      user_id: 503,
      agent_id: 303,
      assigned_by: 103,
      assigned_team: { id: 3, name: 'Équipe 1 Jira', center_id: 103 },
      status: 'en attente',
      status_history: [
        { status: 'nouveau', updated_by: 103, date: '2025-08-02T08:00:00Z' }
      ],
      location: { lat: 35.725, lng: -0.572 },
      created_at: '2025-08-02T07:45:00Z'
    },
    {
      user_id: 504,
      agent_id: 304,
      assigned_by: 104,
      assigned_team: { id: 4, name: 'Équipe 2 Perma', center_id: 104 },
      status: 'rejeté',
      status_history: [
        { status: 'nouveau', updated_by: 104, date: '2025-08-03T08:00:00Z' },
        { status: 'rejeté', updated_by: 104, date: '2025-08-04T08:00:00Z' }
      ],
      location: { lat: 35.605, lng: -0.482 },
      created_at: '2025-08-03T07:00:00Z'
    }
  ]);

  // NOTIFICATIONS
  await db.collection('notification').insertMany([
    {
      user_id: 501,
      title: 'Signalement en cours de traitement',
      content: 'Votre signalement du 01/08 est en cours de traitement.',
      target_type: 'report',
      target_id: 'report_501',
      location: { lat: 35.630, lng: -0.545 },
      read: false,
      created_at: '2025-08-02T10:05:00Z'
    },
    {
      user_id: 502,
      title: 'Signalement traité',
      content: 'Merci ! Votre signalement a été résolu.',
      target_type: 'report',
      target_id: 'report_502',
      location: { lat: 35.698, lng: -0.622 },
      read: true,
      created_at: '2025-08-03T12:00:00Z'
    },
    {
      user_id: 503,
      title: 'Votre signalement est en attente',
      content: 'Un agent sera affecté sous peu.',
      target_type: 'report',
      target_id: 'report_503',
      location: { lat: 35.725, lng: -0.572 },
      read: false,
      created_at: '2025-08-02T09:00:00Z'
    },
    {
      user_id: 504,
      title: 'Signalement rejeté',
      content: 'Votre signalement a été rejeté : informations incomplètes.',
      target_type: 'report',
      target_id: 'report_504',
      location: { lat: 35.605, lng: -0.482 },
      read: true,
      created_at: '2025-08-04T08:30:00Z'
    }
  ]);
};
