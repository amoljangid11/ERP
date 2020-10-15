const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const frequenttask= new Schema({

task:{type:String},
status:{type:Boolean}
})

frequenttask.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
frequenttask.set('toJSON', {
    virtuals: true
});




frequenttask.plugin(autoIncrement.plugin, {
    model: 'frequenttask',
    field: 'frequenttaskid',
    startAt: 1,
    incrementBy: 1
});



module.exports = frequenttask;