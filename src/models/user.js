const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const user = new  Schema({
    name: String,
    email: String,
    password: String,
    balance: {
        type: Number,
        default: 0,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
user.pre('save', function(next) {                                                                                                                                        
    if(this.password) {                                                                                                                                                        
        var salt = bcrypt.genSaltSync(10)                                                                                                                                     
        this.password  = bcrypt.hashSync(this.password, salt)                                                                                                                
    }                                                                                                                                                                          
    next()                                                                                                                                                                     
}) 

module.exports = mongoose.model('User', user);