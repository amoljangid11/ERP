const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
 autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const timeall = new Schema({
    
		timezoneval:{type:Object},
    	description:{type:Object}
});

// Duplicate the ID field.
timeall.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
timeall.set('toJSON', {
    virtuals: true
});




timeall.plugin(autoIncrement.plugin, {
    model: 'timeall',
    field: 'timeallid',
    startAt: 1,
    incrementBy: 1
});




module.exports = timeall;