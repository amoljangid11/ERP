const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
 autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const sitetime = new Schema({
    
		timezone:{type:Object},
		
        description:{type:Object},
      
		
});

// Duplicate the ID field.
sitetime.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
sitetime.set('toJSON', {
    virtuals: true
});




sitetime.plugin(autoIncrement.plugin, {
    model: 'time',
    field: 'timeid',
    startAt: 1,
    incrementBy: 1
});




module.exports = sitetime;