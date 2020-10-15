const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const states = new Schema({

country1:{type:String},
state1:{type:String},


});




// Duplicate the ID field.
states.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
states.set('toJSON', {
    virtuals: true
});




states.plugin(autoIncrement.plugin, {
    model: 'states',
    field: 'statesid',
    startAt: 1,
    incrementBy: 1
});




module.exports = states;