const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'waste_manager';

async function run() {
  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db(dbName);

  // Création de la collection avec un validateur JSON (optionnel)
  await db.createCollection('notifications', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['userId', 'type', 'content', 'status', 'sentAt'],
        properties: {
          userId: { bsonType: 'objectId' },
          type: { bsonType: 'string' },
          channel: { bsonType: 'string' },
          content: { bsonType: 'string' },
          status: { bsonType: 'string' },
          sentAt: { bsonType: 'date' },
          readAt: { bsonType: ['date', 'null'] },
          agentAction: { bsonType: 'bool' },
          reportId: { bsonType: 'objectId' },
          meta: {
            bsonType: 'object',
            properties: {
              zone: { bsonType: 'string' },
              wasteTypes: {
                bsonType: 'array',
                items: { bsonType: 'string' }
              }
            }
          }
        }
      }
    }
  });

  console.log('Collection "notifications" créée avec validation.');
  await client.close();
}

run().catch(console.dir);
