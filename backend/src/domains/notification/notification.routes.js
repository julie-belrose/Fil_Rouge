import express from 'express';
import * as notificationController from './notification.controller.js';

const router = express.Router();

// Test notifications route
router.get('/', (req, res) => {
    res.json({ message: 'Notifications route is working' });
});

router.get('/:id', notificationController.getNotification);
router.get('/', notificationController.getNotifications);
router.post('/', notificationController.createNotification);
router.put('/:id', notificationController.updateNotification);
router.delete('/:id', notificationController.deleteNotification);

export default router;