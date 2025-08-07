import 'dotenv/config';
import { connectDB, closeDB } from '@database/mongodb/mongodbConnection.js';
import { ObjectId } from 'mongodb';

const seedMongoDB = (async () => {
    try {
        const db = await connectDB();

        const notifications = [
            {
                user_id: 1,
                title: 'Bienvenue !',
                content: 'Votre compte a été créé avec succès.',
                target_type: null,
                target_id: null,
                read: false,
                created_at: new Date()
            },
            {
                user_id: 2,
                title: 'Signalement traité',
                content: 'Votre signalement #12345 a été traité.',
                target_type: 'report',
                target_id: new ObjectId(),
                read: false,
                created_at: new Date()
            }
        ];

        await db.collection('notification').insertMany(notifications);

        console.info('MongoDB seed complete - 2 notifications inserted');
        await closeDB();
    } catch (err) {
        console.error('MongoDB seed failed:', err.message);
        process.exit(1);
    }
});

seedMongoDB();

