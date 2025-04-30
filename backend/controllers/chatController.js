import Chat from '../models/Chat.js';

export const getChatHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const chats = await Chat.find({
      $or: [{ sender: userId }, { receiver: userId }],
    }).sort({ createdAt: 1 });
    res.status(200).json({ success: true, messages: chats });
  } catch (error) {
    console.error('Error fetching chat history:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch chats' });
  }
};
export const sendMessage = async (req, res) => {
    try {
      const { sender, receiver, content } = req.body;
  
      // Create a new chat message
      const newMessage = new Chat({ sender, receiver, content });
      await newMessage.save();
  
      res.status(201).json({ success: true, message: newMessage });
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ success: false, message: 'Failed to send message' });
    }
  };