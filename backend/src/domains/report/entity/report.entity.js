const reportEntity = (data = {}) => ({
    id: data.id || null,
    title: data.title || '',
    description: data.description || '',
    status: data.status || 'open',
    createdAt: data.createdAt || new Date(),
    createdBy: data.createdBy || null
});

module.exports = reportEntity;