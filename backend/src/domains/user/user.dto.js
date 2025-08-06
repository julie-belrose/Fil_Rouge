/**
 * Validates and transforms user creation data
 * @param {Object} data - Raw input data
 * @returns {Object} Validated and transformed user data
 * @throws {Error} If validation fails
 */
const createUserDto = (data) => {
    const { error, value } = createSchema.validate(data);
    if (error) {
        throw new Error(`Validation error: ${error.details[0].message}`);
    }
    return userEntity(value);
};

const updateUserDto = (data) => {
    const { error, value } = updateSchema.validate(data);
    if (error) {
        throw new Error(`Validation error: ${error.details[0].message}`);
    }
    return userEntity(value);
};

module.exports = { createUserDto, updateUserDto };