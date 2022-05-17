const express = require('express');

const Router = express.Router();
const { getProducts, productsSearch, getProduct, postProduct} = require('../controllers/product')

Router.get('/products', getProducts);
Router.post('/products/search', productsSearch);
Router.get('/product/:id', getProduct);
Router.post('/product', postProduct);


module.exports = Router;