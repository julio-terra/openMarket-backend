const Product = require('../models/product');

const multer = require('multer');

const UploadImagesService = require('../services/uploadImagesService');
const DeleteImagesService = require('../services/deleteImagesService');

const getProducts = async(req, res) =>{
    try{
        const products = await Product.find()
        res.json({ products });
    }
    catch(err){
        res.json({error: true, message: err})
    };
};
const productsSearch = async(req, res) =>{
    try{
        const page = req.query.page ? Number(req.query.page) : 0;
        const itensPerPage = req.query.itensPerPage ? Number(req.query.itensPerPage) : 0;
        const limit = itensPerPage;
        const offset = page * itensPerPage;
        const products = await Product.find({tags: {$in: req.body.tags}}).skip(offset).limit(limit)
        res.json({ products });
    }
    catch(err){
        res.json({error: true, message: err})
    };
};
const getProduct = async(req, res) =>{
    try{
        const product = await Product.findById(req.params.id);
        res.json({ product });
    }
    catch(err){
        res.json({error: true, message: err})
    };
};
const postProduct = async(req, res) =>{
    try{
        const { file } = req;
        const uploadImagesService = new UploadImagesService();
        await uploadImagesService.execute(file);

        const product = new Product(req.body);
        await product.save()
        res.json({product});
    }
    catch(err){
        res.json({error: true, message: err})
    };
};


module.exports = {
    getProducts,
    productsSearch,
    getProduct,
    postProduct
}