// Error handling middleware
const errorHandler = (err, req, res, next) => {
  // Log the error in development
  console.error('Error:', err.message);

  // Respond with error details
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    // Include stack trace only in development
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
  });
};

export  { errorHandler };