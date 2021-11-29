const User = require('../models/user');
const Product = require('../models/product');
const users = require('./petfood.json');

require('../database');

const addProducts = async () =>{
    try{
        for(let user of users){
            const newUser = await  new User(user).save();
            await Product.insertMany(user.products.map(p => ({ ...p, user_id: newUser._id })))
        }
        console.log('final do script')
    }
    catch(err){
        console.log(err.message);
    };
};

addProducts();