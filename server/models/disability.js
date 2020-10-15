const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const disability= new Schema({

disabilities:{type:Object}



})

disability.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
disability.set('toJSON', {
    virtuals: true
});




disability.plugin(autoIncrement.plugin, {
    model: 'disability',
    field: 'disabilityid',
    startAt: 1,
    incrementBy: 1
});



module.exports = disability;