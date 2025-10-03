const express = require('express');
const router = express.Router();

const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    logout
} = require('./auth.controller');

// Test auth route
router.get('/', (req, res) => {
    res.json({ message: 'Auth route is working' });
});

router.get('/:id', getUser);
router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/logout', logout);

module.exports = router;