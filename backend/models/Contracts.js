const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContractSchema = new Schema({
    name: String,    
    key: String,
    content: String,
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

module.exports = mongoose.model('contract',ContractSchema);