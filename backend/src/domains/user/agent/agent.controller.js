const { createAgentDto } = require('./agent.dto');

// Get all agents
const getAgents = (req, res) => {
    res.json('GetAgents Controller OK');
};

// Get single agent
const getAgent = (req, res) => {
    res.json(`GetAgent ${req.params.id} Controller OK`);
};

/**
 * Create a new agent
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const createAgent = async (req, res) => {
    try {
        // 1. Validation des entrées
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        // 2. Validation et transformation avec DTO
        const agentData = createAgentDto(req.body);

        // 3. Création de l'entité
        const agent = agentEntity({
            ...agentData,
            created_by: req.user.id  // ID de l'utilisateur connecté
        });

        // 4. Vérification de la validité de l'entité
        if (!agent.isValid()) {
            throw new Error('Invalid agent data');
        }

        // 5. Appel au service
        const newAgent = await agentService.createAgent(agent);

        // 6. Réponse
        res.status(201).json({
            success: true,
            data: newAgent
        });

    } catch (error) {
        console.error('Error in createAgent:', error);
        const statusCode = error.message.includes('Validation') ? 400 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message
        });
    }
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