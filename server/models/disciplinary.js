const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const disciplinary= new Schema({

    violationtype:{type:Object},
    disciplinaryid:{type:Object},
    raiseincident:{type:Object}
    
    


});
disciplinary.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
disciplinary.set('toJSON', {
    virtuals: true
});




disciplinary.plugin(autoIncrement.plugin, {
    model: 'disciplinary',
    field: 'disciplinaryid',
    startAt: 1,
    incrementBy: 1
});



module.exports = disciplinary;