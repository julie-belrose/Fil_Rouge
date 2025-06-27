// Middleware pour les routes non trouvées
const notFoundHandler = (req, res, next) => {
  const error = new Error();
  res.status(404);
  next(error);
};

module.exports = { notFoundHandler };
