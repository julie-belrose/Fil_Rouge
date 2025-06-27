import jwt from 'jsonwebtoken';

export const isAuthenticated = (req, res, next) => {
    // Autoriser l'accès aux routes publiques
    const publicRoutes = ['/auth/login', '/auth/register', '/'];
    if (publicRoutes.includes(req.path)) {
        return next();
    }

    // Récupérer le token du header Authorization
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer TOKEN"

    if (!token) {
        return res.status(401).json({ message: 'Accès non autorisé - Token manquant' });
    }

    try {
        // Vérifier et décoder le token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'votre_secret_jwt');
        req.user = decoded.user;
        next();
    } catch (error) {
        console.error('Erreur de vérification du token:', error);
        return res.status(403).json({ message: 'Token invalide ou expiré' });
    }
};