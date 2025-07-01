require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
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

// Detect the environment
const env = process.env.NODE_ENV || 'DEV';

// Serve static files according to the environment
if (env === 'PROD') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  console.log('→ Server in mode PRODUCTION (frontend/dist)');
} else {
  app.use(express.static(path.join(__dirname, '../frontend/src')));
  console.log('→ Server in mode DEV (frontend/src)');
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
app.use('/api/admin', adminRoutes);
app.use('/api/reports', reportRoutes);

// 404
app.use((req, res) => {
  res.status(404).send('Page non trouvée');
});

// Routes middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Configuration of the port
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.url);
  next();
});


// For all other routes (non API), return the index.html of the frontend
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/src/index.html'));
// });

// app.get('*', (req, res, next) => {
//   if (req.url.endsWith('.js')) {
//     return res.status(404).send('Script introuvable');
//   }
//   next();
// });


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
