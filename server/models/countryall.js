const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const countryall = new Schema({
countryal:{type:Object},
code:{type:Object},
countr:{type:Object}

});




// Duplicate the ID field.
countryall.virtual('id').get(function(){
    return this._id.toHexString();
});
        
// Ensure virtual fields are serialised.
countryall.set('toJSON', {
    virtuals: true
});




countryall.plugin(autoIncrement.plugin, {
    model: 'countryall',
    field: 'countryallid',
    startAt: 1,
    incrementBy: 1
});




module.exports = countryall;