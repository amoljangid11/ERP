const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
 autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const siteaccount = new Schema({

		accountclasstype:{type:Object},
        description:{type:Object},
      
		
});

// Duplicate the ID field.
siteaccount.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
siteaccount.set('toJSON', {
    virtuals: true
});




siteaccount.plugin(autoIncrement.plugin, {
    model: 'aclass',
    field: 'aclassid',
    startAt: 1,
    incrementBy: 1
});




module.exports = siteaccount;