const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        uniqui: true,
    },
    password: {
        type: String,
        minlength: 5,
    },
    phone: {
        type: String,
        minlength: 3,
    },
    name: {
        type: String,
        minlength: 3,
    },
    surname: {
        type: String,
        minlength: 3,
    },
    country: {
        type: String,
        minlength: 3,
    },
    city: {
        type: String,
        minlength: 3,
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

UserSchema.plugin(mongoose_delete, { deletedAt : true });

module.exports = mongoose.model('user',UserSchema);