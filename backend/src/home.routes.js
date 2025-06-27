import express from 'express';
const router = express.Router();

// Route home
router.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Welcome to Fill_Rouge API',
    version: '1.0.0',
  });
});

export default router;