const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const rolesprivileges= new Schema({

role:{type:Object}


})

rolesprivileges.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
rolesprivileges.set('toJSON', {
    virtuals: true
});




rolesprivileges.plugin(autoIncrement.plugin, {
    model: 'rolesprivileges',
    field: 'rolesprivilegesid',
    startAt: 1,
    incrementBy: 1
});



module.exports = rolesprivileges;