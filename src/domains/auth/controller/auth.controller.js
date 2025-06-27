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
    res.status(201).json('CreateUser Controller OK');
};

// Update user
const updateUser = (req, res) => {
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