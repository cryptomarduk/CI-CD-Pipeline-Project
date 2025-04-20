const express = require('express');
const router = express.Router();

// Basic info endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'CI/CD Demo API',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// API version
router.get('/version', (req, res) => {
  res.json({
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Sample data endpoint
router.get('/data', (req, res) => {
  res.json({
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ]
  });
});

module.exports = router;
