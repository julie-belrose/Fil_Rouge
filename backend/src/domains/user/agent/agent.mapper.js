const agentEntity = require('./agent.entity');

class AgentMapper {
    static toPersistence(agent) {
        return {
            user_id: agent.user_id,
            agent_number: agent.agent_number,
            created_by: agent.created_by,
            center_id: agent.center_id,
            team_id: agent.team_id,
            sector: agent.sector
        };
    }
}

module.exports = AgentMapper;