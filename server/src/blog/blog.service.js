import { dalBlog } from './dal/blog.dal.js';

class ServiceBlog {

  constructor(){
    this.dal = dalBlog(); 
  }

  async getAllPosts() {
    return this.dal.getAllPosts();
  };

  async getPostById(postId) {
    return this.dal.getPostById(postId);
  };

  async getPostByLink(postLink) {
    return this.dal.getPostByLink(postLink);
  };

  async createPost(title, subtitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status) {
    return this.dal.createPost(title, subtitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status);
  };

  async updatePost(postId, title, subtitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status) {
    return this.dal.updatePost(postId, title, subtitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status);
  };

  async deletePost(postId) {
    return this.dal.deletePost(postId);
  }
  
};

export function serviceBlog() {
  return new ServiceBlog();
};