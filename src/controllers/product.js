const Product = require('../models/product');

const UploadImagesService = require('../services/uploadImagesService');
const DeleteImagesService = require('../services/deleteImagesService');

const getProducts = async(request, response) =>{
    try{
        const products = await Product.find()
        response.json({ products });
    }
    catch(err){
        response.json({error: true, message: err})
    };
};
const productsSearch = async(request, response) =>{
    try{
        const page = request.query.page ? Number(request.query.page) : 0;
        const itensPerPage = request.query.itensPerPage ? Number(request.query.itensPerPage) : 0;
        const limit = itensPerPage;
        const offset = page * itensPerPage;
        const totalCount = await Product.find({tags: {$in: request.body.tags}})
        const products = await Product.find({tags: {$in: request.body.tags}}).skip(offset).limit(limit)
        response.json({ products, totalCount});
    }
    catch(err){
        response.json({error: true, message: err})
    };
};
const getProduct = async(request, response) =>{
    try{
        const product = await Product.findById(request.params.id);
        response.json({ product });
    }
    catch(err){
        response.json({error: true, message: err})
    };
};
const getProductsByUser = async(request, response) =>{
    try{
        const products = await Product.find({user_id: request.params.user});
        response.json({ products });
    }
    catch(err){
        response.json({error: true, message: err})
    };
};
const postProduct = async(request, response) =>{
    try{
        const { originalname: fileName, fileSize, filename, location: fileUrl = "" } = request.file;
 
        const uploadImagesService = new UploadImagesService();
        await uploadImagesService.execute(request.file);
        
        
        const product = new Product({
            ...request.body,
            tags: JSON.parse(request.body.tags),
            fileName,
            fileSize,
            key: filename,
            fileUrl
        });
        await product.save()
        response.json({product});
    }
    catch(err){
        response.json({error: true, message: err})
    };
};


module.exports = {
    getProducts,
    productsSearch,
    getProduct,
    getProductsByUser,
    postProduct
}