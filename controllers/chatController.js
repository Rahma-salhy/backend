// chatController.js
// const { Chat } = require('../models'); // Adjust the path as necessary

// Send a chat message
exports.sendMessage = async (req, res) => {
    try {
        const { message, receiverId } = req.body;
        const senderId = req.user.id; // Assuming you have user info in req.user

        const chat = await Chat.create({
            message,
            senderId,
            receiverId,
        });
        
        res.status(201).json(chat);
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message' });
    }
};

// Get chat messages between two users
exports.getChatMessages = async (req, res) => {
    try {
        const { userId } = req.params;
        const senderId = req.user.id; // Assuming you have user info in req.user

        const chats = await Chat.findAll({
            where: {
                senderId: senderId,
                receiverId: userId,
            },
            order: [['createdAt', 'ASC']],
        });
        
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve messages' });
    }
};