require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { errorHandler } = require('./src/middleware/error.middleware');
const { notFoundHandler } = require('./src/middleware/not-found.middleware');

// Import of routes
const authRoutes = require('./src/routes/auth.routes');
const userRoutes = require('./src/routes/user.routes');
const agentRoutes = require('./src/routes/agent.routes');
const adminRoutes = require('./src/routes/admin.routes');
const reportRoutes = require('./src/routes/report.routes');
const homeRoutes = require('./src/routes/home.routes');

// Initialisation of the Express application
const app = express();

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
app.use('/api/admin', adminRoutes);
app.use('/api/reports', reportRoutes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Configuration of the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
