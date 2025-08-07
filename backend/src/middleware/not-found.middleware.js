// Middleware for routes not found
const notFoundHandler = (req, res, next) => {
  const error = new Error(`404 Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export default { notFoundHandler };
