const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const employeeconfiguration= new Schema({

employeetabs:{type:Object},
employmentstatus:{type:Object},
employeeroles:{type:Object},
payfrequency:{type:Object},
remuneration:{type:Object},
jobtitle:{type:Object},
position:{type:Object},
competencylevel:{type:Object},
educationlevel:{type:Object},
courses:{type:Object},
language:{type:Object},
leavetype:{type:Object},
attendancestatus:{type:Object},
bankaccounttype:{type:Object},
identitydocument:{type:Object},
eeoccategory:{type:Object},
workeligibility:{type:Object},
veteranstatus:{type:Object},
militaryservice:{type:Object},




})

employeeconfiguration.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
employeeconfiguration.set('toJSON', {
    virtuals: true
});



employeeconfiguration.plugin(autoIncrement.plugin, {
    model: 'empconfiguration',
    field: 'empconfigurationid',
    startAt: 1,
    incrementBy: 1
});



module.exports = employeeconfiguration;