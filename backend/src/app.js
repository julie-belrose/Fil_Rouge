import 'module-alias/register';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { join } from 'path';
import errorHandler from '@middleware/error.middleware.js';
import notFoundHandler from '@middleware/not-found.middleware.js';
import { server } from '@backend/server.js';

// Import of routes
import authRoutes from '@domains/auth/auth.routes.js';
import adminRequestRoutes from '@domains/adminRequest/adminRequest.routes.js';
import userRoutes from '@domains/user/user.routes.js';
import agentRoutes from '@domains/user/agent/agent.routes.js';
import adminRoutes from '@domains/user/admin/admin.routes.js';
import reportRoutes from '@domains/report/report.routes.js';
import badgeRoutes from '@domains/badge/badge.routes.js';
import notificationRoutes from '@domains/notification/notification.routes.js';
import treatmentCenterRoutes from '@domains/treatmentCenter/treatmentCenter.routes.js';
import homeRoutes from '@backend/home.routes.js';

// Initialisation of the Express application
const app = express();

// Detect the environment
const env = process.env.NODE_ENV || 'DEV';

// Serve static files according to the environment
if (env === 'PROD') {
  app.use(express.static(join(__dirname, '../frontend/dist')));
  console.log(`Server in mode ${env} - static files: frontend/dist`);
} else {
  app.use(express.static(join(__dirname, '../frontend/src')));
  console.log(`Server in mode ${env} - static files: frontend/src`);
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