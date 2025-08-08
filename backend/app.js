'use strict';

import 'dotenv/config';
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { join } from 'path';
import { errorHandler } from './src/middleware/error.middleware.js';
import { notFoundHandler } from './src/middleware/not-found.middleware.js';
import { server } from './server.js';

// Import of routes
import authRoutes from './src/domains/auth/auth.routes.js';
import adminRequestRoutes from './src/domains/adminRequest/adminRequest.routes.js';
import userRoutes from './src/domains/user/user.routes.js';
import agentRoutes from './src/domains/user/agent/agent.routes.js';
import adminRoutes from './src/domains/user/admin/admin.routes.js';
import reportRoutes from './src/domains/report/report.routes.js';
import badgeRoutes from './src/domains/badge/badge.routes.js';
import notificationRoutes from './src/domains/notification/notification.routes.js';
import treatmentCenterRoutes from './src/domains/treatmentCenter/treatmentCenter.routes.js';
import homeRoutes from './src/home.routes.js';

// Initialisation of the Express application
const app = express();

// Detect the environment
const env = process.env.NODE_ENV || 'DEV';

// Serve static files according to the environment
if (env === 'PROD') {
  app.use(express.static(join(__dirname, '../frontend/dist')));
  console.log('Server in mode PRODUCTION (frontend/dist)');
} else {
  app.use(express.static(join(__dirname, '../frontend/src')));
  console.log('Server in mode DEV (frontend/src)');
}

// Middleware
app.use(helmet());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes public
app.use('/', homeRoutes);

// Routes protected
app.use('/api/auth', authRoutes);
app.use('/api/adminRequests', adminRequestRoutes);
app.use('/api/users', userRoutes);
app.use('/api/agents', agentRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/badges', badgeRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/treatmentCenters', treatmentCenterRoutes);

// Gestion of errors 404
app.use(notFoundHandler);

// Middleware of errors
app.use(errorHandler);

server(app);

export default app;