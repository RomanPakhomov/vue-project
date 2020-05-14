import express from 'express';
import bodParser from 'body-parser';
import cors from 'cors';

import { blogRouter } from './blog/blog.router.js';
import { promoRouter } from './promo/promo.router.js';
import { catalogRouter } from './catalog/catalog.router.js';

const app = express();

app.use(bodParser.json());

app.use('/blog', blogRouter);
app.use('/promo', promoRouter);
app.use('/catalog', catalogRouter);

app.use(cors());

app.listen(3000, function () {
  console.log('server start at port 3000');
});