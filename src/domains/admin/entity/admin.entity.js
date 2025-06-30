const adminEntity = (data = {}) => ({
    id: data.id || null,
    name: data.name || '',
    email: data.email || '',
    role: 'admin',
    permissions: data.permissions || ['read', 'write', 'delete']
});

module.exports = adminEntity;