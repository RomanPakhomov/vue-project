import express from 'express';
import { promoController } from './promo.controller.js';

export const promoRouter = express.Router();

promoRouter.get('/', (req, res) => promoController.getAllPromo(req, res));
promoRouter.get('/article', (req, res) => promoController.getPromo(req, res));
promoRouter.post('/article', (req, res) => promoController.createPromo(req, res))
promoRouter.put('/article', (req, res) => promoController.updatePromo(req, res));
promoRouter.delete('/article', (req, res) => promoController.deletePromo(req, res));