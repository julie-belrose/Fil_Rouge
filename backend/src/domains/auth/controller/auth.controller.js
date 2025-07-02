const { loginDto, registerDto } = require('../dto/auth.dto');
const AuthentificationService = require('../service/auth.service');

// Login user
const login = (req, res) => {
    try {
        const credentials = loginDto(req.body);
        const auth = authEntity(credentials);
        console.log(auth);
        res.json({
            success: true,
            data: auth
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Create new account
const register = (req, res) => {
    try {
        const authData = registerDto(req.body);
        const auth = authEntity(authData);
        res.status(201).json({
            success: true,
            data: auth
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


module.exports = {
    login,
    register
};