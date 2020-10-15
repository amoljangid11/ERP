const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const exitprocedure= new Schema({

exittype:{type:Object},
exitinterviewquestion:{type:Object},
configurequestions:{type:Object},
exitsetting:{type:Object},
initiatecheckstatus:{type:Object},
event:{type:Object},
empid:{type:String},
hrmanagerid:{type:String},
l2managerid:{type:String},
repoid:{type:String},
interviewexittype:{type:String},
exitinterview:{type:Object},
exitty:{type:String},
exitid:{type:Object},
selectquestions:{type:Object},
fmanagerid:{type:Object},
smanagerid:{type:Object},
gmanagerid:{type:Object}
})


exitprocedure.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
exitprocedure.set('toJSON', {
    virtuals: true
});




exitprocedure.plugin(autoIncrement.plugin, {
    model: 'exitprocedure',
    field: 'exitprocedureid',
    startAt: 1,
    incrementBy: 1
});



module.exports = exitprocedure; 