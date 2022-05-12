const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductVotesSchema = new Schema({
    user_id: Schema.Types.ObjectId,
    product_id: Schema.Types.ObjectId,
    degree: Number,    
    createdAt: {
        type: Date,
        default: Date.now,      
    },
    updatedAt: {
        type: Date,
        default: Date.now,      
    }   
});

module.exports = mongoose.model('productVotes',ProductVotesSchema);