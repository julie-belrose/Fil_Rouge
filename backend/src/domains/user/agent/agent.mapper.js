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

    static toDomain(rawData) {
        if (!rawData) return null;
        return agentEntity(rawData);
    }

    static toDTO(agent) {
        if (!agent) return null;
        return { ...agent };
    }
}

module.exports = AgentMapper;