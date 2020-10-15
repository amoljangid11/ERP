const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const countries = new Schema({

countryvalue:{type:Object,unique: true},
codevalue:{type:Object},

});




// Duplicate the ID field.
countries.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
countries.set('toJSON', {
    virtuals: true
});




countries.plugin(autoIncrement.plugin, {
    model: 'countries',
    field: 'countriesid',
    startAt: 1,
    incrementBy: 1
});




module.exports = countries;