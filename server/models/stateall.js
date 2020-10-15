const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const stateall = new Schema({


statename:[],
countryallid:{type:Object},
stat:{type:Object}

});




// Duplicate the ID field.
stateall.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
stateall.set('toJSON', {
    virtuals: true
});




stateall.plugin(autoIncrement.plugin, {
    model: 'stateall',
    field: 'stateallid',
    startAt: 1,
    incrementBy: 1
});




module.exports = stateall;