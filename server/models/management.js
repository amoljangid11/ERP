
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const management= new Schema({
worklocation:{type:Object},
manageholiday:{type:Object},
leavemanagementoption:{type:Object},
addemployeeleave:{type:Object}

})

management.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
management.set('toJSON', {
    virtuals: true
});



management.plugin(autoIncrement.plugin, {
    model: 'management',
    field: 'managementid',
    startAt: 1,
    incrementBy: 1
});



module.exports = management;