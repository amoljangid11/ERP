const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const servicereqSchema= new Schema({

category:{type:Object},
description:{type:Object},
requesttype:{type:Object},
categoryvalue:{type:Object},
descriptionval:{type:Object}
})

module.exports = mongoose.model('Servicereq', servicereqSchema) 