const createAgentDto = (data) => ({
    name: data.name,
    email: data.email,
    department: data.department
});

module.exports = { createAgentDto };