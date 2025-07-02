const { loginSchema, registerSchema } = require('../schema/auth.schema');

const loginDto = (data) => {
    const { error, value } = loginSchema.validate(data);
    if (error) {
        throw new Error(`Validation error: ${error.details[0].message}`);
    }
    return value;
};

const registerDto = (data) => {
    const { error, value } = registerSchema.validate(data);
    if (error) {
        throw new Error(`Validation error: ${error.details[0].message}`);
    }
    return value;
};

module.exports = { loginDto, registerDto };