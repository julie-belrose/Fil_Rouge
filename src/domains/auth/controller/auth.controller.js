const { loginDto, registerDto } = require('../dto/auth.dto');

// Login user
const login = (req, res) => {
    const credentials = loginDto(req.body);
    console.log('Login attempt with:', credentials);
    res.json(`Login Controller OK`);
};

// Register new user
const register = (req, res) => {
    const userData = registerDto(req.body);
    console.log('New registration:', userData);
    res.status(201).json('User registered successfully');
};


module.exports = {
    login,
    register
};