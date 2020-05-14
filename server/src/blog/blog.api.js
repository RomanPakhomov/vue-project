import { serviceBlog } from './blog.service.js';

class ApiBlog {

  constructor(){
    this.service = serviceBlog();
  }

  async getAllPosts() {
    const result = await this.service.getAllPosts();
    return result;
  };

  async getPost(postId) {
    const result = await this.service.getPostById(postId);
    return result;
  };

  async getPostByLink(postLink) {
    const result = await this.service.getPostByLink(postLink);
    return result;
  }

  async createPost(title, subtitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status) {
    const result = await this.service.createPost(title, subtitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status);
    return result;
  };

  async updatePost(postId, title, subtitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status) {
    const result = await this.service.updatePost(postId, title, subtitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status);
    return result;
  };

  async deletePost(postId) {
    const result = await this.service.deletePost(postId);
    return result;
  }
  
};

export function apiBlog() {
  return new ApiBlog();
};