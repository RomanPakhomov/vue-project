import { apiBlog } from './blog.api.js';

export const blogController = { 

  async getAllPosts(req, res){
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    const result = await apiBlog().getAllPosts();
    res.json(result);
  },

  async getPost(req, res){
    const result = req.query.id ? await apiBlog().getPost(req.query.id) : await apiBlog().getPostByLink(req.query.link);
    res.json(result);
  },

  async createPost(req, res){
    const result = await apiBlog().createPost(
      req.body.title,
      req.body.subtitle,
      req.body.body,
      req.body.imageSrc,
      req.body.images,
      req.body.metaTitle,
      req.body.metaDescription,
      req.body.metaKeywords,
      req.body.date,
      req.body.link,
      req.body.status
    );
    res.json(result);
  },

  async updatePost(req, res){
    const result = await apiBlog().updatePost(
      req.body.id,
      req.body.title,
      req.body.subtitle,
      req.body.body,
      req.body.imageSrc,
      req.body.images,
      req.body.metaTitle,
      req.body.metaDescription,
      req.body.metaKeywords,
      req.body.date,
      req.body.link,
      req.body.status
    );
    res.json(result);
  },

  async deletePost(req, res){
    const result = await apiBlog().deletePost(req.body.id);
    res.json(result);
  },

};