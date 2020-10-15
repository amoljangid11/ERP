const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const defaulttask= new Schema({

task:{type:String},
status:{type:Boolean}

})

defaulttask.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
defaulttask.set('toJSON', {
    virtuals: true
});




defaulttask.plugin(autoIncrement.plugin, {
    model: 'defaulttask',
    field: 'defaulttaskid',
    startAt: 1,
    incrementBy: 1
});



module.exports = defaulttask;