import express from 'express';
import { getFeedPosts, getUserPosts, likePost } from '../controllers/postController.js';
import { verifyToken } from '../middleware/authMiddleware.js';


const router = express.Router();

// READ
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

// UPDATE
router.put("/:id/like", verifyToken, likePost);

export default router;
