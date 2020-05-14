import { dalCatalog } from './dal/catalog.dal.js';

class ServiceCatalog {

  constructor(){
    this.dal = dalCatalog(); 
  }

  async getAllProducts() {
    return this.dal.getAllProducts();
  };

  async getProductById(productId) {
    return this.dal.getProductById(productId);
  };

  async getProductByLink(productLink) {
    return this.dal.getProductByLink(productLink);
  };

  async createProduct(categoryId, bestSeller, name, price, sale, description, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status) {
    return this.dal.createProduct(categoryId, bestSeller, name, price, sale, description, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status);
  };

  async updateProduct(productId, categoryId, bestSeller, name, price, sale, description, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status) {
    return this.dal.updateProduct(productId, categoryId, bestSeller, name, price, sale, description, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status);
  };

  async deleteProduct(productId) {
    return this.dal.deleteProduct(productId);
  }
  
};

export function serviceCatalog() {
  return new ServiceCatalog();
};