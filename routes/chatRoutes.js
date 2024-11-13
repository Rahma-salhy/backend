// chatRoutes.js
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const { authenticate } = require('../middleware/authMiddleware'); // Middleware for authentication

// Send a chat message
router.post('/send',  chatController.sendMessage);

// Get chat messages
router.get('/:userId',chatController.getChatMessages);

module.exports = router;