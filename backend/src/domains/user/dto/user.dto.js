const createUserDto = (data) => ({
    name: data.name,
    email: data.email,
    password: data.password
});

const updateUserDto = (data) => ({
    name: data.name,
    email: data.email
});

module.exports = { createUserDto, updateUserDto };