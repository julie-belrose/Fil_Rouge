const express = require('express');
const router = express.Router();

const {
    getBadges,
    getBadge,
    createBadge,
    updateBadge,
    deleteBadge
} = require('../domains/badge/controller/badge.controller');

// Test agents route
router.get('/', (req, res) => {
    res.json({ message: 'Badges route is working' });
});

router.get('/:id', getBadge);
router.get('/', getBadges);
router.post('/', createBadge);
router.put('/:id', updateBadge);
router.delete('/:id', deleteBadge);

module.exports = router;