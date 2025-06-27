// Middleware de gestion des erreurs
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? '��' : err.stack,
  });
};

module.exports = { errorHandler };
