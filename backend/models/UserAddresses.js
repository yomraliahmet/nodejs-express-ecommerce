const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

const UserAddressSchema = new Schema({
    user_id: Schema.Types.ObjectId,
    name: String,
    country: String,
    city: String,
    address: String,
    createdAt: {
        type: Date,
        default: Date.now,      
    },
    updatedAt: {
        type: Date,
        default: Date.now,      
    }
});

UserAddressSchema.plugin(mongoose_delete, { deletedAt : true });

module.exports = mongoose.model('userAddress',UserAddressSchema);