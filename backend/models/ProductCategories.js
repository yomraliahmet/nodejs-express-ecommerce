const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductCategorySchema = new Schema({
    parent_id: String,
    name: String,    
    slug: String,    
    order: {
        type: Number,
        default: 0,      
    },    
    is_active: {
        type: Boolean,
        default: true,      
    }    
});

module.exports = mongoose.model('productCategory',ProductCategorySchema);