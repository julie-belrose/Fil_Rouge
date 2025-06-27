// Middleware for routes not found
export const notFoundHandler = (req, res, next) => {
  const error = new Error(`404 Not Found - ${req.originalUrl} - ${req.method}`);
  res.status(404);
  next(error);
};
