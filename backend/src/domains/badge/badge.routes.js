import express from 'express';
import * as badgeController from './badge.controller.js';

const router = express.Router();

router.get('/:id', badgeController.getBadge);
router.get('/', badgeController.getBadges);
router.post('/', badgeController.createBadge);
router.put('/:id', badgeController.updateBadge);
router.delete('/:id', badgeController.deleteBadge);

// Test badges route
router.get('/', (req, res) => {
    res.json({ message: 'Badges route is working' });
});

export default router;