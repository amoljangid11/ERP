const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const emptab = new Schema({

name:{type:Object},
checked:{type:Object},

});




// Duplicate the ID field.
emptab.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
emptab.set('toJSON', {
    virtuals: true
});




emptab.plugin(autoIncrement.plugin, {
    model: 'emptab',
    field: 'emptabid',
    startAt: 1,
    incrementBy: 1
});




module.exports = emptab;

