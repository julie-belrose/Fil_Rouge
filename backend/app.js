require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const { errorHandler } = require('./src/middleware/error.middleware');
const { notFoundHandler } = require('./src/middleware/not-found.middleware');

// Import of routes
const authRoutes = require('./src/domains/auth/auth.routes');
const userRoutes = require('./src/domains/user/user.routes');
const agentRoutes = require('./src/domains/user/agent/agent.routes');
const adminRoutes = require('./src/domains/user/admin/admin.routes');
const reportRoutes = require('./src/domains/report/report.routes');
const homeRoutes = require('./src/home.routes');

// Initialisation of the Express application
const app = express();

// Detect the environment
const env = process.env.NODE_ENV || 'DEV';

// Serve static files according to the environment
if (env === 'PROD') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  console.log('Server in mode PRODUCTION (frontend/dist)');
} else {
  app.use(express.static(path.join(__dirname, '../frontend/src')));
  console.log('Server in mode DEV (frontend/src)');
}

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes public
app.use('/', homeRoutes);

// Routes protected
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/agents', agentRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/reports', reportRoutes);

// Gestion of errors 404
app.use(notFoundHandler);

// Middleware of errors
app.use(errorHandler);

// Configuration of the port
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    const { testConnectionMysql } = require('./src/database/mysql/mysql_connexion');
    await testConnectionMysql();
    console.log('Database connection established successfully');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Open http://localhost:${PORT} in your browser`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1); // Stop the process in case of error
  }
};

startServer();

module.exports = app;
