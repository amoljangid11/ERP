const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const city = new Schema({

country2:{type:String},
state2:{type:String},
city2:{type:String}

});




// Duplicate the ID field.
city.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
city.set('toJSON', {
    virtuals: true
});




city.plugin(autoIncrement.plugin, {
    model: 'city',
    field: 'cityid',
    startAt: 1,
    incrementBy: 1
});




module.exports = city;