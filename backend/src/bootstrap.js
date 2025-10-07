import * as dbMysql from '#database/mysql/mysqlConnection.js';
import * as dbMongo from '#database/mongodb/mongodbConnection.js';

export const bootstrap = async (app) => {
    const port = process.env.PORT || 3000;
    const env = process.env.NODE_ENV || 'dev';
    const appUrl = process.env.APP_URL || 'http://localhost';

    try {
        // TODO: Change back to process.env.DB_ENABLED !== 'false' before production
        if (process.env.DB_ENABLED !== 'false') {
            await dbMysql.connectDB();
            await dbMongo.connectDB();
            //await dbMysql.testConnectionMySQL(); //test in local
            //await dbMongo.testConnectionMongoDB(); //test in local
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

