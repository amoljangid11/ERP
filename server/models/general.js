const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const general= new Schema({
ethnic:{type:Object},
gender:{type:Object},
marital:{type:Object},
prefixes:{type:Object},
race:{type:Object},
context_codes:{type:Object},
nationalities:{type:Object},
acc_classtype:{type:Object},
licensetype:{type:Object},
identitycodes:{type:Object},
emailcontacts:{type:Object},
numberformats:{type:Object},
currencies:{type:Object},
currency_conversion:{type:Object},
timezone:{type:Object}
})

general.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
general.set('toJSON', {
    virtuals: true
});



general.plugin(autoIncrement.plugin, {
    model: 'general',
    field: 'generalid',
    startAt: 1,
    incrementBy: 1
});



module.exports = general;