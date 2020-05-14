import express from 'express';
import asyncHandler from 'express-async-handler';
import { blogController } from './blog.controller.js';

export const blogRouter = express.Router();

blogRouter.get('/', asyncHandler(blogController.getAllPosts));
blogRouter.get('/post', asyncHandler(blogController.getPost));
blogRouter.post('/post', asyncHandler(blogController.createPost));
blogRouter.put('/post', asyncHandler(blogController.updatePost));
blogRouter.delete('/post', asyncHandler(blogController.deletePost));