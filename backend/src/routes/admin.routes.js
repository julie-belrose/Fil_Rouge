const express = require('express');
const router = express.Router();

const {
    getAllAdmins,
    getAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin
} = require('../domains/admin/controller/admin.controller');

// Test admin route
router.get('/', (req, res) => {
    res.json({ message: 'Admin route is working' });
});

router.get('/:id', getAdmin);
router.get('/', getAllAdmins);
router.post('/', createAdmin);
router.put('/:id', updateAdmin);
router.delete('/:id', deleteAdmin);

module.exports = router;