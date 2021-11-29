const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


const user = new  Schema({
    name: String,
    email: String,
    password: String,
    photo: String,
    balance: {
        type: Number,
        default: 0,
        required: false
    },
});
user.pre('save', async function(next) {                                                                                                                                        
    if(this.password) {                                                                                                                                                        
        var salt = await bcrypt.genSaltSync(10)                                                                                                                                     
        this.password  = await bcrypt.hashSync(this.password, salt)                                                                                                                
    }                                                                                                                                                                          
    next()                                                                                                                                                                     
}) 

module.exports = mongoose.model('User', user);