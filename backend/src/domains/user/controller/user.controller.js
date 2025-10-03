const { createUserDto, updateUserDto } = require('../dto/user.dto');
const { userEntity } = require('../entity/user.entity');

// Get all users
const getUsers = (req, res) => {
    res.json('GetUsers Controller OK');
};

// Get single user
const getUser = (req, res) => {
    res.json(`GetUser ${req.params.id} Controller OK`);
};

// Create user
const createUser = (req, res) => {
    const userData = createUserDto(req.body);
    const user = userEntity(userData);
    onsole.log('User created:', user);
    console.log('New user:', userData);
    res.status(201).json('CreateUser Controller OK');
};

// Update user
const updateUser = (req, res) => {
    const userData = updateUserDto(req.body);
    console.log('Updated user:', userData);
    res.json(`UpdateUser ${req.params.id} Controller OK`);
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