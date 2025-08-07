const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const adminController = require('./admin.controller');

const {
    getAllAdmins,
    getAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin
} = adminController;

// Test admin route
router.get('/', (req, res) => {
    res.json({ message: 'Admin route is working' });
});

router.get('/:id', getAdmin);
router.get('/', getAllAdmins);

// Create admin (protected by authentication)
router.post(
    '/',
    [
        body('user_id').isInt({ min: 1 }).withMessage('User ID must be a positive integer'),
        body('center_id').isInt({ min: 1 }).withMessage('Center ID must be a positive integer')
    ],
    createAdmin
);

router.put('/:id', updateAdmin);
router.delete('/:id', deleteAdmin);

module.exports = router;