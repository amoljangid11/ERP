const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
 autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const jobtitle = new Schema({

		/*jobtitle_code:{type:Object},
        jobtitle:{type:Object},
        jobdescription:{type:Object},
        min_experience:{type:Object},
        gradecode:{type:Object},
        payfrequency:{type:Object},
        comments:{type:Object},*/
       jobobj:{type:Object}
      
		
});

// Duplicate the ID field.
jobtitle.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
jobtitle.set('toJSON', {
    virtuals: true
});




jobtitle.plugin(autoIncrement.plugin, {
    model: 'jobtitle',
    field: 'jobtitleid',
    startAt: 1,
    incrementBy: 1
});




module.exports = jobtitle;