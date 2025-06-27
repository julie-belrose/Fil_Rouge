import * as dbMysql from '#database/mysql/mysqlConnection.js';
import * as dbMongo from '#database/mongodb/mongodbConnection.js';

export const bootstrap = async (app) => {
    const port = process.env.PORT || 3000;
    const env = process.env.NODE_ENV || 'dev';
    const appUrl = process.env.APP_URL || 'http://localhost';

    try {
        // ⚠️ WARNING: DB disabled for testing - MUST RE-ENABLE before PR ⚠️
        // TODO: Change back to process.env.DB_ENABLED !== 'false' before production
        if (process.env.DB_ENABLED === 'true') {
            await dbMysql.connectDB();
            await dbMongo.connectDB();
            //await dbMysql.testConnectionMySQL();
            //await dbMongo.testConnectionMongoDB();
        }

        app.listen(port, () => {
            console.info(`Server started in '${env}' mode`);
            console.info(`Accessible at: ${appUrl}:${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
};

