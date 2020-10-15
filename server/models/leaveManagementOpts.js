const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const leavemanagementopts= new Schema({
businessunit:{type:Object},
department:{type:Object},
startmonth:{type:Object},
weekone:{type:Object},
weektwo:{type:Object},
whours:{type:Object},
hdayrequest:{type:Object},
altransferable:{type:Object},
skipholidays:{type:Object},
hrmanager:{type:Object},
description:{type:Object},


})


leavemanagementopts.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
leavemanagementopts.set('toJSON', {
    virtuals: true
});




leavemanagementopts.plugin(autoIncrement.plugin, {
    model: 'leavemanagementopts',
    field: 'leavemanagementoptsid',
    startAt: 1,
    incrementBy: 1
});



module.exports = leavemanagementopts; 