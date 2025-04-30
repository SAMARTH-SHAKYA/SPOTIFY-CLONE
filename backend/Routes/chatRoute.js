import express from 'express';
import { getChatHistory, sendMessage } from '../controllers/chatController.js';

const router = express.Router();

router.get('/history/:userId', getChatHistory);
router.post('/send', sendMessage);

export default router;