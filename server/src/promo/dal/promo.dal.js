import fs from 'fs';
import expand from 'expand-template';
import path from 'path';
import { db } from '../../tools/db/db.service.js';

class DalPromo {

  constructor(db){
    this.createSql = expand();
    this.db = db();
    this.path = 'src/promo/dal';
    this.getAllPromoSql = fs.readFileSync(path.join(this.path, '/sql/GET_ALL_PROMO.sql'), 'utf-8', (err) => console.log(err));
    this.getPromoByIdSql = fs.readFileSync(path.join(this.path, '/sql/GET_PROMO.sql'), 'utf-8', (err) => console.log(err));
    this.getPromoByLinkSql = fs.readFileSync(path.join(this.path, '/sql/GET_PROMO_BY_LINK.sql'), 'utf-8', (err) => console.log(err));
    this.createPromoSql = fs.readFileSync(path.join(this.path, '/sql/CREATE_PROMO.sql'), 'utf-8', (err) => console.log(err));
    this.updatePromoSql = fs.readFileSync(path.join(this.path, '/sql/UPDATE_PROMO.sql'), 'utf-8', (err) => console.log(err));
    this.deletePromoSql = fs.readFileSync(path.join(this.path, '/sql/DELETE_PROMO.sql'), 'utf-8', (err => console.log(err)));
  }

  async getAllPromo() {
    const result = await this.db.query(this.getAllPromoSql);
    return result;
  }

  async getPromoById(id){
    const params = {
      ID: id,
    }
    const result = await this.db.query(this.createSql(this.getPromoByIdSql, params));
    return result;
  }

  async getPromoByLink(link){
    const params = {
      LINK: link,
    }
    const result = await this.db.query(this.createSql(this.getPromoByLinkSql, params));
    return result;
  }

  async createPromo(title, subTitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status){
    const params = {
      TITLE: title,
      SUBTITLE: subTitle,
      BODY: body,
      IMAGE_SRC: imageSrc,
      IMAGES: images,
      META_TITLE: metaTitle,
      META_DESCRIPTION: metaDescription,
      META_KEYWORDS: metaKeywords,
      DATE: date,
      LINK: link,
      STATUS: status
    }
    const result = await this.db.query(this.createSql(this.createPromoSql, params));
    return result;
  }

  async updatePromo(id, title, subTitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status){
    const params = {
      TITLE: title,
      SUBTITLE: subTitle,
      BODY: body,
      IMAGE_SRC: imageSrc,
      IMAGES: images,
      META_TITLE: metaTitle,
      META_DESCRIPTION: metaDescription,
      META_KEYWORDS: metaKeywords,
      DATE: date,
      LINK: link,
      STATUS: status,
      ID: id
    }
    const result = await this.db.query(this.createSql(this.updatePromoSql, params));
    return result;
  }

  async deletePromo(id){
    const params = {
      ID: id,
    };
    const result = await this.db.query(this.createSql(this.deletePromoSql, params));
    return result;
  }

}

export function dalPromo() {
  return new DalPromo(db);
}