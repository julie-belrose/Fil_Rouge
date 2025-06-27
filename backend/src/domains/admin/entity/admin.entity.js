const adminEntity = (data = {}) => ({
    id: data.id || null,
    firstName: data.firstName || '',
    lastName: data.lastName || '',
    email: data.email || '',
    role: 'admin',
    permissions: data.permissions || ['read', 'write', 'delete']
});

module.exports = adminEntity;