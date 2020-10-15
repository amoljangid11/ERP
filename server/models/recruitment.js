const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const recruitment= new Schema({
    openings:{type:Object},
    approver1_id:{type:String},
    approver2_id:{type:String},
    approver3_id:{type:String},
    employee_id:{type:String},
    candidates:{type:Object},
    interviews:{type:Object}
//    screeningtype: {type: Object},
//    employeecandidate:{type: Object},
//    agenciesunits:{type: Object},

})

recruitment.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
recruitment.set('toJSON', {
    virtuals: true
});




recruitment.plugin(autoIncrement.plugin, {
    model: 'recruitment',
    field: 'recruitmentid',
    startAt: 1,
    incrementBy: 1
});



module.exports = recruitment;