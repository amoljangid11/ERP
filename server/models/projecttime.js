const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const project_time= new Schema({
	project:{type:Object},
    task_time:{type:Object},
    resource_time:{type:Object},
  

 

})

project_time.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
project_time.set('toJSON', {
    virtuals: true
});




project_time.plugin(autoIncrement.plugin, {
    model: 'project_time',
    field: 'project_timeid',
    startAt: 1,
    incrementBy: 1
});



module.exports = project_time;