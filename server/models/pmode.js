const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const pmode= new Schema({

pmodes:{type:Object}


})


pmode.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
pmode.set('toJSON', {
    virtuals: true
});

pmode.plugin(autoIncrement.plugin, {
    model: 'pmode',
    field: 'pmodeid',
    startAt: 1,
    incrementBy: 1
});



module.exports = pmode; 

