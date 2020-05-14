import fs from 'fs';
import expand from 'expand-template';
import path from 'path';
import { db } from '../../tools/db/db.service.js';

class DalBlog {

  constructor(db){
    this.createSql = expand();
    this.db = db();
    this.path = 'src/blog/dal';
    this.getAllPostsSql = fs.readFileSync(path.join(this.path, '/sql/GET_ALL_POSTS.sql'), 'utf-8', (err) => console.log(err));
    this.getPostByIdSql = fs.readFileSync(path.join(this.path, '/sql/GET_POST.sql'), 'utf-8', (err) => console.log(err));
    this.getPostByLinkSql = fs.readFileSync(path.join(this.path, '/sql/GET_POST_BY_LINK.sql'), 'utf-8', (err) => console.log(err));
    this.createPostSql = fs.readFileSync(path.join(this.path, '/sql/CREATE_POST.sql'), 'utf-8', (err) => console.log(err));
    this.updatePostSql = fs.readFileSync(path.join(this.path, '/sql/UPDATE_POST.sql'), 'utf-8', (err) => console.log(err));
    this.deletePostSql = fs.readFileSync(path.join(this.path, '/sql/DELETE_POST.sql'), 'utf-8', (err => console.log(err)));
  }

  async getAllPosts() {
    const result = await this.db.query(this.getAllPostsSql);
    return result;
  }

  async getPostById(id){
    const params = {
      ID: id,
    }
    const result = await this.db.query(this.createSql(this.getPostByIdSql, params));
    return result;
  }

  async getPostByLink(link){
    const params = {
      LINK: link,
    }
    const result = await this.db.query(this.createSql(this.getPostByLinkSql, params));
    return result;
  }

  async createPost(title, subTitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status){
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
    const result = await this.db.query(this.createSql(this.createPostSql, params));
    return result;
  }

  async updatePost(id, title, subTitle, body, imageSrc, images, metaTitle, metaDescription, metaKeywords, date, link, status){
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
    const result = await this.db.query(this.createSql(this.updatePostSql, params));
    return result;
  }

  async deletePost(id){
    const params = {
      ID: id,
    };
    const result = await this.db.query(this.createSql(this.deletePostSql, params));
    return result;
  }

}

export function dalBlog() {
  return new DalBlog(db);
}

//(() => { dalBlog().getAllPosts() })()