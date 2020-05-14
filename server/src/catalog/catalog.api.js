import { serviceCatalog } from './catalog.service.js';

class ApiCatalog {

  constructor(){
    this.service = serviceCatalog();
  }

  async getAllProducts() {
    const result = await this.service.getAllProducts();
    return result;
  };

  async getProduct(productId) {
    const result = await this.service.getProductById(productId);
    return result;
  };

  async getProductByLink(productLink) {
    const result = await this.service.getProductByLink(productLink);
    return result;
  }

  async createProduct(categoryId, bestSeller, name, price, sale, description, imageSrc, images, metaTitle, metaDescription, metaKeywords, link, status, date) {
    const result = await this.service.createProduct(categoryId, bestSeller, name, price, sale, description, imageSrc, images, metaTitle, metaDescription, metaKeywords, link, status, date);
    return result;
  };

  async updateProduct(productId, categoryId, bestSeller, name, price, sale, description, imageSrc, images, metaTitle, metaDescription, metaKeywords, link, status, date) {
    const result = await this.service.updateProduct(productId, categoryId, bestSeller, name, price, sale, description, imageSrc, images, metaTitle, metaDescription, metaKeywords, link, status, date);
    return result;
  };

  async deleteProduct(productId) {
    const result = await this.service.deleteProduct(productId);
    return result;
  }
  
};

export function apiCatalog() {
  return new ApiCatalog();
};