const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const cityall = new Schema({
cityname:{type:Object},
stateallid:{type:Object},
countryallid:{type:Object},
cit:{type:Object}

});




// Duplicate the ID field.
cityall.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
cityall.set('toJSON', {
    virtuals: true
});




cityall.plugin(autoIncrement.plugin, {
    model: 'cityall',
    field: 'cityallid',
    startAt: 1,
    incrementBy: 1
});




module.exports = cityall;