const { createUserDto, updateUserDto, deleteUserDto } = require('./user.dto');
const userService = require('./user.service');

// Get all users
const getUsers = handlerBody(async (req, res) => {
    return await userService.getUsers();
});

// Get single user
const getUser = handlerBody(async (req, res) => {
    return await userService.getUser(req.params.id);
});

// Create user
/**
    * Handles user creation request
    * @param {Object} req - Express request object
    * @param {Object} res - Express response object
    */
const createUser = handlerRequest(createUserDto, userEntity, async (user) => {
    const newUser = await userService.createUser(user);
    return newUser;
});

// Update user
const updateUser = handlerRequest(updateUserDto, userEntity, async (user) => {
    const updatedUser = await userService.updateUser(user);
    return updatedUser;
});

// Delete user
const deleteUser = handlerRequest(deleteUserDto, userEntity, async (user) => {
    const deletedUser = await userService.deleteUser(user);
    return deletedUser;
});

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};