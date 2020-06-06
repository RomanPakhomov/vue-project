import express from 'express';
import bodParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';

import { blogRouter } from './blog/blog.router.js';
import { promoRouter } from './promo/promo.router.js';
import { catalogRouter } from './catalog/catalog.router.js';

const app = express();

app.use(cors());
app.use(express.static('src/public'));
app.use(bodParser.json());

app.use('/blog', blogRouter);
app.use('/promo', promoRouter);
app.use('/catalog', catalogRouter);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/img/')
  },
  filename: function (req, file, cb) {
    const [ fileName, fileType ] = file.originalname.split('.');
    cb(null, fileName + '-' + Date.now() + '.' + fileType)
  }
});

const upload = multer({storage: storage});

app.post('/download', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.send(req.file.filename);
})

app.post('/remove', function(req, res){
  try {
    const path = `./public/img/${req.body.fileName}`
    fs.unlinkSync(path);
    res.send('file successful removed');
  } catch(err) {
    console.error(err)
    res.send('file removing error');
  }
});

app.listen(4000, function () {
  console.log('server start at port 4000');
});