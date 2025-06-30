const agentEntity = (data = {}) => ({
    id: data.id || null,
    name: data.name || '',
    email: data.email || '',
    role: 'agent',
    department: data.department || 'support'
});

module.exports = agentEntity;