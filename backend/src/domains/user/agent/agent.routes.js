const express = require('express');
const router = express.Router();

const {
    getAgents,
    getAgent,
    createAgent,
    updateAgent,
    deleteAgent
} = require('./agent.controller');

// Test agents route
router.get('/', (req, res) => {
    res.json({ message: 'Agents route is working' });
});

router.get('/:id', getAgent);
router.get('/', getAgents);
router.post('/', createAgent);
router.put('/:id', updateAgent);
router.delete('/:id', deleteAgent);

module.exports = router;