const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new  Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    name: String,
    photo: String,
    price: Number,
    category: String,
    tags: [String]
});

module.exports = mongoose.model('Product', product);