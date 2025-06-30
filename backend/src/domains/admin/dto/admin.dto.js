const adminActionDto = (data) => ({
    action: data.action,
    targetId: data.targetId,
    details: data.details
});

module.exports = { adminActionDto };