const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const business= new Schema({

businessunit:{type:Object},
streetadd:{type:Object},
department:{type:Object},
streetad:{type:Object},
name:{type:Object}


})

business.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
business.set('toJSON', {
    virtuals: true
});




business.plugin(autoIncrement.plugin, {
    model: 'business',
    field: 'businessid',
    startAt: 1,
    incrementBy: 1
});



module.exports = business;