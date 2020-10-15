const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
 autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const payfrequency = new Schema({

		payfrequency:{type:Object},
		payshortcode:{type:Object},
        description:{type:Object},
      
		
});

// Duplicate the ID field.
payfrequency.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
payfrequency.set('toJSON', {
    virtuals: true
});




payfrequency.plugin(autoIncrement.plugin, {
    model: 'pay',
    field: 'payid',
    startAt: 1,
    incrementBy: 1
});




module.exports = payfrequency;