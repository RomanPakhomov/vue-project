import express from 'express';
import { catalogController } from './catalog.controller.js';

export const catalogRouter = express.Router();

catalogRouter.get('/', (req, res) => catalogController.getAllProducts(req, res));
catalogRouter.get('/product', (req, res) => catalogController.getProducts(req, res));
catalogRouter.post('/product', (req, res) => catalogController.createProducts(req, res))
catalogRouter.put('/product', (req, res) => catalogController.updateProducts(req, res));
catalogRouter.delete('/product', (req, res) => catalogController.deleteProducts(req, res));