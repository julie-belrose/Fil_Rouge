const express = require('express');
const router = express.Router();

// router.get('/test-error', (req, res, next) => {
//     const error = new Error('Test error');
//     error.status = 400;
//     next(error);
// });

// Test admin route
router.get('/', (req, res) => {
    res.json({ message: 'Admin route is working' });
});

module.exports = router;