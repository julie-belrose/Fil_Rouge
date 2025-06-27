const express = require('express');
const router = express.Router();

// Test agents route
router.get('/', (req, res) => {
    res.json({ message: 'Reports route is working' });
});

module.exports = router;
