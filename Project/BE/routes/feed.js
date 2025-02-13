import express from 'express';
import { body } from 'express-validator';
import { getPost, createPost, getPostById, updatePost, deletePost} from '../controllers/feed.js';
import { createLike, getLikesForFeed } from '../controllers/like.js';

const router = express.Router();

router.get('/posts', getPost);

router.get('/:postId', getPostById);

router.post('/post',[
    body('title').trim().isLength({min: 5}),
    body('content').trim().isLength({min: 5}),
], createPost);

router.put('/post/:postId', updatePost);

router.delete('/post/:postId', deletePost);

router.get('/:feedId/likes', getLikesForFeed);

router.post('/like', createLike);

export default router;