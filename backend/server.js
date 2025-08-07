const testConnectionMySQL = require('./config/mysql/mysqlConfig.js');
const testConnectionMongoDB = require('./config/mongodb/mongodbConfig.js');

const server = async (app) => {
    const port = process.env.PORT || 3000;
    const env = process.env.NODE_ENV || 'development';
    const appUrl = process.env.APP_URL || 'http://localhost';

    try {
        // Optional: test database connections before starting server
        if (process.env.DB_ENABLED !== 'false') {
            //await connectDB();
            //await connectMongoDB();
            await testConnectionMySQL();
            await testConnectionMongoDB();
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

module.exports = server;

