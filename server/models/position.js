const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
 autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

 
const position = new Schema({

        positions:{type:Object}
    
		/*position:{type:Object},
		jobtitle:{type:Object},
        description:{type:Object},*/
      
		
});

// Duplicate the ID field.
position.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
position.set('toJSON', {
    virtuals: true
});




position.plugin(autoIncrement.plugin, {
    model: 'position',
    field: 'positionid',
    startAt: 1,
    incrementBy: 1
});




module.exports = position;