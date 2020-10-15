const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const selfservice= new Schema({

official:{type:Object},
leaverequest:{type:Object},
reporting_mid:{type:String},
employee_id:{type:String},
event:{type:Object},
username:{type:String },
myteam:{type:Object},
selectteam:{type:Object},
hr_mid:{type:Object},
TempId:{type:Object}

})

selfservice.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
selfservice.set('toJSON', {
    virtuals: true
});




selfservice.plugin(autoIncrement.plugin, {
    model: 'selfservice',
    field: 'selfserviceid',
    startAt: 1,
    incrementBy: 1
});



module.exports = selfservice;