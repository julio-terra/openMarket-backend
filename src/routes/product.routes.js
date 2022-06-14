const express = require('express');
const multer = require('multer');

const { getProducts, productsSearch, getProduct, getProductsByUser, postProduct} = require('../controllers/product')
const uploadConfig = require('../config/upload');

const Router = express.Router();
const upload = multer(uploadConfig);

Router.get('/products', getProducts);
Router.post('/products/search', productsSearch);
Router.get('/product/:id', getProduct);
Router.get('/products/:user', getProductsByUser);
Router.post('/product', upload.single('file'), postProduct);

module.exports = Router;