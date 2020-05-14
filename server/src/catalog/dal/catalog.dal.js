import fs from 'fs';
import expand from 'expand-template';
import path from 'path';
import { db } from '../../tools/db/db.service.js';

class DalCatalog {

  constructor(db){
    this.createSql = expand();
    this.db = db();
    this.path = 'src/catalog/dal';

    this.getAllProductsSql = fs.readFileSync(path.join(this.path, '/sql/GET_ALL_PRODUCT.sql'), 'utf-8', (err) => console.log(err));
    this.getProductByIdSql = fs.readFileSync(path.join(this.path, '/sql/GET_PRODUCT.sql'), 'utf-8', (err) => console.log(err));
    this.getProductByLinkSql = fs.readFileSync(path.join(this.path, '/sql/GET_PRODUCT_BY_LINK.sql'), 'utf-8', (err) => console.log(err));
    this.createProductSql = fs.readFileSync(path.join(this.path, '/sql/CREATE_PRODUCT.sql'), 'utf-8', (err) => console.log(err));
    this.updateProductSql = fs.readFileSync(path.join(this.path, '/sql/UPDATE_PRODUCT.sql'), 'utf-8', (err) => console.log(err));
    this.deleteProductSql = fs.readFileSync(path.join(this.path, '/sql/DELETE_PRODUCT.sql'), 'utf-8', (err => console.log(err)));

    this.createCategorySql = fs.readFileSync(path.join(this.path, '/sql/CREATE_CATEGORY.sql'), 'utf-8', (err) => console.log(err));
    this.updateCategorySql = fs.readFileSync(path.join(this.path, '/sql/UPDATE_CATEGORY.sql'), 'utf-8', (err) => console.log(err));
    this.getCategorySql = fs.readFileSync(path.join(this.path, '/sql/GET_CATEGORY.sql'), 'utf-8', (err) => console.log(err));
    this.getAllCategoriesSql = fs.readFileSync(path.join(this.path, '/sql/GET_ALL_CATEGORIES.sql'), 'utf-8', (err) => console.log(err));
    this.deleteCategorySql = fs.readFileSync(path.join(this.path, '/sql/DELETE_CATEGORY.sql'), 'utf-8', (err) => console.log(err));
  }

  async getAllProducts() {
    const result = await this.db.query(this.getAllProductsSql);
    return result;
  }

  async getProductById(id){
    const params = {
      ID: id,
    };
    const result = await this.db.query(this.createSql(this.getProductByIdSql, params));
    return result;
  }

  async getProductByLink(link){
    const params = {
      LINK: link,
    };
    const result = await this.db.query(this.createSql(this.getProductByLinkSql, params));
    return result;
  }

  async createProduct(categoryId, bestSeller, name, price, sale, description, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status){
    const params = {
      CATEGORY_ID: categoryId,
      BEST_SELLER: bestSeller,
      NAME: name,
      PRICE: price, 
      SALE: sale,
      DESCRIPTION: description,
      IMAGE_SRC: imageSrc,
      IMAGES: images,
      META_TITLE: metaTitle,
      META_DESCRIPTION: metaDescription,
      META_KEYWORDS: metaKeywords,
      LINK: link,
      STATUS: status,
      DATE: date
    };
    const result = await this.db.query(this.createSql(this.createProductSql, params));
    return result;
  }

  async updateProduct(id, categoryId, bestSeller, name, price, sale, description, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status){
    const params = {
      CATEGORY_ID: categoryId,
      BEST_SELLER: bestSeller,
      NAME: name,
      PRICE: price,
      SALE: sale,
      DESCRIPTION: description,
      IMAGE_SRC: imageSrc,
      IMAGES: images,
      META_TITLE: metaTitle,
      META_DESCRIPTION: metaDescription,
      META_KEYWORDS: metaKeywords,
      LINK: link,
      STATUS: status,
      DATE: date,
      ID: id
    };
    const result = await this.db.query(this.createSql(this.updateProductSql, params));
    return result;
  }

  async deleteProduct(id){
    const params = {
      ID: id,
    };
    const result = await this.db.query(this.createSql(this.deleteProductSql, params));
    return result;
  }

  async createCategory(name, description, childs, link, status, imageSrc, metaTitle, metaDescription, metaKeywords){
    const params = {
      NAME: name,
      DESCRIPTION: description,
      CHILDS: childs,
      LINK: link, 
      STATUS: status,
      IMAGE_SRC: imageSrc,
      META_TITLE: metaTitle,
      META_DESCRIPTION: metaDescription,
      META_KEYWORDS: metaKeywords,
    }
    const result = await this.db.query(this.createSql(this.createCategorySql, params));
    return result;
  }

  async updateCategory(id, name, description, childs, link, status, imageSrc, metaTitle, metaDescription, metaKeywords){
    const params = {
      NAME: name,
      DESCRIPTION: description,
      CHILDS: childs,
      LINK: link, 
      STATUS: status,
      IMAGE_SRC: imageSrc,
      META_TITLE: metaTitle,
      META_DESCRIPTION: metaDescription,
      META_KEYWORDS: metaKeywords,
      ID: id
    };
    const result = await this.db.query(this.createSql(this.updateCategory, params));
    return result;
  }

  async getCategory(id){
    const params = {
      ID: id
    };
    const result = await this.db.query(this.createSql(this.getCategorySql, params));
    return result;
  }

  async getAllCategories(){
    const result = await this.db.query(this.getAllCategoriesSql);
    return result;
  }

  async deleteCategory(id){
    const params = {
      ID: id
    };
    const result = await this.db.query(this.createSql(this.deleteCategorySql, params));
    return result;
  }

}

export function dalCatalog() {
  return new DalCatalog(db);
}