const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const configuration= new Schema({

   screeningtype: {type: Object},
   employeecandidate:{type: Object},
   agenciesunits:{type: Object},
   configtime:{type:Object}

})

configuration.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
configuration.set('toJSON', {
    virtuals: true
});
configuration.plugin(autoIncrement.plugin, {
    model: 'configuration',
    field: 'configurationid',
    startAt: 1,
    incrementBy: 1
});
module.exports = configuration;