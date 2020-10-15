const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const contacts= new Schema({
  externalusers:{type:Object},
  vendors:{type:Object},
  clients:{type:Object},
  projects:{type:Object}

})


contacts.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
contacts.set('toJSON', {
    virtuals: true
});




contacts.plugin(autoIncrement.plugin, {
    model: 'contacts',
    field: 'contactsid',
    startAt: 1,
    incrementBy: 1
});



module.exports = contacts; 