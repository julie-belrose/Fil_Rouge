const createReportDto = (data) => ({
    title: data.title,
    description: data.description,
    location: data.location,
    status: data.status || 'reported'
});

module.exports = { createReportDto };