import express from 'express';
const router = express.Router();

import * as agentController from './agent.controller.js';

router.get('/:id', agentController.getAgent);
router.get('/', agentController.getAgents);
router.post('/', agentController.createAgent);
router.put('/:id', agentController.updateAgent);
router.delete('/:id', agentController.deleteAgent);

export default router;