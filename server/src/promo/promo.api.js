import { servicePromo } from './promo.service.js';

class ApiPromo {

  constructor(){
    this.service = servicePromo();
  }

  async getAllPromo() {
    const result = await this.service.getAllPromo();
    return result;
  };

  async getPromo(promoId) {
    const result = await this.service.getPromoById(promoId);
    return result;
  };

  async getPromoByLink(promoLink) {
    const result = await this.service.getPromoByLink(promoLink);
    return result;
  }

  async createPromo(title, subtitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status) {
    const result = await this.service.createPromo(title, subtitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status);
    return result;
  };

  async updatePromo(promoId, title, subtitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status) {
    const result = await this.service.updatePromo(promoId, title, subtitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status);
    return result;
  };

  async deletePromo(promoId) {
    const result = await this.service.deletePromo(promoId);
    return result;
  }
  
};

export function apiPromo() {
  return new ApiPromo();
};