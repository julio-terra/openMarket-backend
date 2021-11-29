const express = require('express');
const Product = require('../models/product');

const Router = express.Router();


Router.get('/products', async(req, res) =>{
    try{
        const products = await Product.find()
        res.json({ products });
    }
    catch(err){
        res.json({error: true, message: err})
    };
});
Router.get('/product/:id', async(req, res) =>{
    try{
        const product = await Product.findById(req.params.id);
        res.json({ product });
    }
    catch(err){
        res.json({error: true, message: err})
    };
});
Router.post('/product', async(req, res) =>{
    try{
        const product = new Product(req.body);
        await product.save();
        res.json(product);
    }
    catch(err){
        res.json({error: true, message: err})
    };
});


module.exports = Router;