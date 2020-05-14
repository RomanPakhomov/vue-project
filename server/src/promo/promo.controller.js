import { apiPromo } from './promo.api.js';

export const promoController = { 

  getAllPromo: async (req, res) => {
    const result = await apiPromo().getAllPromo();
    res.send(result);
  },

  getPromo: async (req, res) => {
    const result = req.query.id ? await apiPromo().getPromo(req.query.id) : await apiPromo().getPromoByLink(req.query.link);
    res.send(result);
  },

  createPromo: async (req, res) => {
    const result = await apiPromo().createPromo(
      req.body.title,
      req.body.subtitle,
      req.body.body,
      req.body.imageSrc,
      req.body.images,
      req.body.metaTitle,
      req.body.metaDescription,
      req.body.metaKeywords,
      req.body.date,
      req.body.link,
      req.body.status
    );
    res.send(result);
  },

  updatePromo: async (req, res) => {
    const result = await apiPromo().updatePromo(
      req.body.id,
      req.body.title,
      req.body.subtitle,
      req.body.body,
      req.body.imageSrc,
      req.body.images,
      req.body.metaTitle,
      req.body.metaDescription,
      req.body.metaKeywords,
      req.body.date,
      req.body.link,
      req.body.status
    );
    res.send(result);
  },

  deletePromo: async (req, res) => {
    const result = await apiPromo().deletePromo(req.body.id);
    res.send(result);
  },

};