const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    category_id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        uniqui: true,
    },
    slug: {
        type: String,
        required: true,
        uniqui: true,
    },
    description: String,
    image_url: String,
    video_url: String,
    price: Schema.Types.Decimal128,
    discount: Schema.Types.Decimal128,
    tax: Schema.Types.Decimal128,
    currency: String,
    images: [],
    videos: [],
    is_active: {
        type: Boolean,
        default: true,      
    },
    createdAt: {
        type: Date,
        default: Date.now,      
    },
    updatedAt: {
        type: Date,
        default: Date.now,      
    }

});

module.exports = mongoose.model('product',ProductSchema);