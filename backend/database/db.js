const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("MongoDB: Connected");
    })
    .catch((err)=>{
        console.log("MongoDB: Error",err);
    });

    mongoose.Promise = global.Promise;
}