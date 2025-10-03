const express = require('express');
const router = express.Router();

const {
    getNotifications,
    getNotification,
    createNotification,
    updateNotification,
    deleteNotification
} = require('../domains/user/notification/controller/notification.controller');

// Test agents route
router.get('/', (req, res) => {
    res.json({ message: 'Notifications route is working' });
});

router.get('/:id', getNotification);
router.get('/', getNotifications);
router.post('/', createNotification);
router.put('/:id', updateNotification);
router.delete('/:id', deleteNotification);

module.exports = router;