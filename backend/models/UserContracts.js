const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

const UserContractSchema = new Schema({
    user_id: Schema.Types.ObjectId,
    contract_id: Schema.Types.ObjectId,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now,      
    },
    updatedAt: {
        type: Date,
        default: Date.now,      
    }
});

UserContractSchema.plugin(mongoose_delete, { deletedAt : true });

module.exports = mongoose.model('userContract',UserContractSchema);