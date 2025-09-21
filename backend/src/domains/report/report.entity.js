/**
 * Report entity factory function
 */
const reportEntity = (data = {}) => {
    const now = new Date();

    return {
        _id: data._id || null,
        user_id: data.user_id || null,
        agent_id: data.agent_id || null,
        assigned_by: data.assigned_by || null,
        assigned_team: data.assigned_team || null,  // { id, name, center_id }
        status: data.status || 'pending',
        status_history: data.status_history || [],
        location: data.location || null,
        created_at: data.created_at || now,
        updated_at: now,

        // Methods
        addStatusUpdate(status, updatedBy) {
            this.status_history.push({
                status,
                date: new Date(),
                updated_by: updatedBy
            });
            this.status = status;
            this.updated_at = new Date();
        },

        assignToTeam(team, assignedById) {
            this.assigned_team = {
                id: team.id,
                name: team.name,
                center_id: team.center_id
            };
            this.assigned_by = assignedById;
            this.addStatusUpdate('assigned_to_team', assignedById);
        },

        assignToAgent(agentId, assignedById) {
            this.agent_id = agentId;
            this.assigned_by = assignedById;
            this.addStatusUpdate('assigned_to_agent', assignedById);
        },

        updateLocation(location) {
            this.location = location;
            this.updated_at = new Date();
        },

        isValid() {
            return this.user_id &&
                this.status &&
                this.location &&
                this.location.lat !== undefined &&
                this.location.lng !== undefined;
        }
    };
};

module.exports = reportEntity;