const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

const UserBillingInformationSchema = new Schema({
    user_id: Schema.Types.ObjectId,
    name: String,
    surname: String,
    phone: String,
    city: String,
    address: String,
    bill_type: String,
    company_name: String,
    tax_administration: String,
    tax_number: String,
    efatura: Boolean,
    createdAt: {
        type: Date,
        default: Date.now,      
    },
    updatedAt: {
        type: Date,
        default: Date.now,      
    }
});

UserBillingInformationSchema.plugin(mongoose_delete, { deletedAt : true });

module.exports = mongoose.model('userBillingInformation',UserBillingInformationSchema);