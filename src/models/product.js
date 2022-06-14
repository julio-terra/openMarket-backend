const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new  Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    name: String,
    price: Number,
    category: String,
    tags: [String],
    fileName: String,
    fileSize: Number,
    key: String,
    fileUrl: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
});
product.pre("save", function() {
  if (!this.fileUrl) {
    this.fileUrl = `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/${this.key}`;
  }
});

module.exports = mongoose.model('Product', product);