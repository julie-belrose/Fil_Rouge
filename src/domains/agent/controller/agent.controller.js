// Get all agents
const getAgents = (req, res) => {
    res.json('GetAgents Controller OK');
};

// Get single agent
const getAgent = (req, res) => {
    res.json(`GetAgent ${req.params.id} Controller OK`);
};

// Create agent
const createAgent = (req, res) => {
    res.status(201).json('CreateAgent Controller OK');
};

// Update agent
const updateAgent = (req, res) => {
    res.json(`UpdateAgent ${req.params.id} Controller OK`);
};

// Delete agent
const deleteAgent = (req, res) => {
    res.json(`DeleteAgent ${req.params.id} Controller OK`);
};

module.exports = {
    getAgents,
    getAgent,
    createAgent,
    updateAgent,
    deleteAgent
};