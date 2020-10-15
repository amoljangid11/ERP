const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
 autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

 
const employmentstatus = new Schema({
    
        workcode:{type:Object,unique:true},
		workshortcode:{type:Object},
        description:{type:Object},
      
		
});

// Duplicate the ID field.
employmentstatus.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
employmentstatus.set('toJSON', {
    virtuals: true
});




employmentstatus.plugin(autoIncrement.plugin, {
    model: 'empstatus',
    field: 'empstatusid',
    startAt: 1,
    incrementBy: 1
});




module.exports = employmentstatus;