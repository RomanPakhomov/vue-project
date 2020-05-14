import { apiCatalog } from './catalog.api.js';

export const catalogController = { 

  getAllProducts: async (req, res) => {
    const result = await apiCatalog().getAllProducts();
    res.send(result);
  },

  getProduct: async (req, res) => {
    const result = req.query.id ? await apiCatalog().getProduct(req.query.id) : await apiCatalog().getProductByLink(req.query.link);
    res.send(result);
  },

  createProduct: async (req, res) => {
    const result = await apiCatalog().createProduct(
      req.body.categoryId,
      req.body.bestSeller,
      req.body.name,
      req.body.price,
      req.body.sale,
      req.body.description,
      req.body.imageSrc,
      req.body.images,
      req.body.metaTitle,
      req.body.metaDescription,
      req.body.metaKeywords,
      req.body.link,
      req.body.status,
      req.body.date
    );
    res.send(result);
  },

  updateProduct: async (req, res) => {
    const result = await apiCatalog().updateProduct(
      req.body.id,
      req.body.categoryId,
      req.body.bestSeller,
      req.body.name,
      req.body.price,
      req.body.sale,
      req.body.description,
      req.body.imageSrc,
      req.body.images,
      req.body.metaTitle,
      req.body.metaDescription,
      req.body.metaKeywords,
      req.body.link,
      req.body.status,
      req.body.date,
    );
    res.send(result);
  },

  deleteProduct: async (req, res) => {
    const result = await apiCatalog().deleteProduct(req.body.id);
    res.send(result);
  },

};