import { dalPromo } from './dal/promo.dal.js';

class ServicePromo {

  constructor(){
    this.dal = dalPromo(); 
  }

  async getAllPromo() {
    return this.dal.getAllPromo();
  };

  async getPromoById(promoId) {
    return this.dal.getPromoById(promoId);
  };

  async getPromoByLink(promoLink) {
    return this.dal.getPromoByLink(promoLink);
  };

  async createPromo(title, subtitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status) {
    return this.dal.createPromo(title, subtitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status);
  };

  async updatePromo(promoId, title, subtitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status) {
    return this.dal.updatePost(promoId, title, subtitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status);
  };

  async deletePromo(promoId) {
    return this.dal.deletePromo(promoId);
  }
  
};

export function servicePromo() {
  return new ServicePromo();
};