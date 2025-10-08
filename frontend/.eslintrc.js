export default {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    parserOptions: {
        // 'latest' correspond déjà à ES2023 pour ESLint 8+, mais es2021 est suffisant.
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        // Les règles n'ont pas besoin de changer pour ES6, ce sont les mêmes.
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'no-undef': 'error',
        'prefer-const': 'error', // Excellent pour forcer l'utilisation de const et let au lieu de var
    },
};