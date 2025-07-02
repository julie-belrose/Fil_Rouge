const bcrypt = require('bcryptjs');
const AuthRepository = require('../repository/auth.repository');
const { registerDto, loginDto } = require('../dto/auth.dto');

class AuthService {
    /**
     * Register a new authentication
     */
    static async register(authData) {
        const { email, password, role, is_active } = registerDto(authData);
        // Check if the email already exists
        const existingAuth = await AuthRepository.findByEmail(email);
        if (existingAuth) {
            throw new Error('Email already used');
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the authentication
        const newAuth = await AuthRepository.create({
            email,
            password_hash: hashedPassword,
            role,
            is_active
        });

        return {
            id: newAuth.id,
            email: newAuth.email,
            role: newAuth.role
        };
    }

    /**
     * Login a user
     */
    static async login(credentials) {
        const { email, password } = loginDto(credentials);

        // Find the authentication
        const auth = await AuthRepository.findByEmail(email);
        if (!auth) {
            throw new Error('Invalid credentials');
        }

        // Verify the password
        const isMatch = await bcrypt.compare(password, auth.password_hash);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        // Check if the account is active
        if (!auth.is_active) {
            throw new Error('This account is disabled');
        }

        return {
            id: auth.id,
            email: auth.email,
            role: auth.role
        };
    }
}

module.exports = AuthService;