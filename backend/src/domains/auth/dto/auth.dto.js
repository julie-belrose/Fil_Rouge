const loginDto = (data) => ({
    email: data.email,
    password: data.password
});

const registerDto = (data) => ({
    name: data.name,
    email: data.email,
    password: data.password
});

module.exports = { loginDto, registerDto };