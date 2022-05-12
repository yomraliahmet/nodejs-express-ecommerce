const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductCommentsSchema = new Schema({
    user_id: Schema.Types.ObjectId,
    product_id: Schema.Types.ObjectId,
    comment: String,    
    createdAt: {
        type: Date,
        default: Date.now,      
    },
    updatedAt: {
        type: Date,
        default: Date.now,      
    }   
});

module.exports = mongoose.model('productComments',ProductCommentsSchema);