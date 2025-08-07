const express = require('express');
const router = express.Router();

const {
    getAdminRequests,
    getAdminRequest,
    createAdminRequest,
    updateAdminRequest,
    deleteAdminRequest
} = require('./adminRequest.controller');

// Test agents route
router.get('/', (req, res) => {
    res.json({ message: 'AdminRequests route is working' });
});

router.get('/:id', getAdminRequest);
router.get('/', getAdminRequests);
router.post('/', createAdminRequest);
router.put('/:id', updateAdminRequest);
router.delete('/:id', deleteAdminRequest);

module.exports = router;