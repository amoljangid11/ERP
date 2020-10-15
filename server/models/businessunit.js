const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
 autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const businessunit = new Schema({
        businessunits:{type:Object},
        businessname:{type:Object},
		businesscode:{type:Object},
        startedon:{type:Object},
        cityname:{type:Object},
        statename:{type:Object},
        countryname:{type:Object},
        timezone:{type:Object},
        street1:{type:Object},
        street2:{type:Object},
        street3:{type:Object},
        
});

// Duplicate the ID field.
businessunit.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
businessunit.set('toJSON', {
    virtuals: true
});


businessunit.plugin(autoIncrement.plugin, {
    model: 'businessunit',
    field: 'businessunitid',
    startAt: 1,
    incrementBy: 1
});




module.exports = businessunit;