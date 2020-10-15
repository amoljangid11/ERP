const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const domain= new Schema({

    domain:{type:Object},    


});
domain.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
domain.set('toJSON', {
    virtuals: true
});




domain.plugin(autoIncrement.plugin, {
    model: 'domain',
    field: 'domainid',
    startAt: 1,
    incrementBy: 1
});



module.exports = domain;