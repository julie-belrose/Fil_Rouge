const { createUserDto, updateUserDto } = require('../dto/user.dto');
const userService = require('../service/user.service');

// Get all users
const getUsers = (req, res) => {
    res.json('GetUsers Controller OK');
};

// Get single user
const getUser = (req, res) => {
    res.json(`GetUser ${req.params.id} Controller OK`);
};

// Create user
/**
    * Handles user creation request
    * @param {Object} req - Express request object
    * @param {Object} res - Express response object
    */
const createUser = async (req, res) => {
    try {
        // 1. Validate and transform input
        const userData = createUserDto(req.body);

        // 2. Process business logic
        const newUser = await userService.createUser(userData);

        // 3. Return success response
        res.status(201).json({
            success: true,
            data: newUser
        });
    } catch (error) {
        // Handle errors
        const statusCode = error.message.includes('Validation') ? 400 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message
        });
    }
}

// Update user
const updateUser = (req, res) => {
    try {
        // 1. Validate and transform input using DTO
        const validatedData = updateUserDto(req.body);
        console.log('Updated user data:', validatedData);

        // 2. Create entity from validated data
        const user = userEntity({ ...validatedData, id: req.params.id });

        res.json({
            success: true,
            message: `UpdateUser ${req.params.id}`,
            data: user
        });
    } catch (error) {
        console.error('Error in updateUser:', error);
        const statusCode = error.message.includes('Validation') ? 400 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message
        });
    }
};

// Delete user
const deleteUser = (req, res) => {
    res.json(`DeleteUser ${req.params.id} Controller OK`);
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};