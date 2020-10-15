const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
 autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const geo = new Schema({
    
		geographycode:{type:String},
		defaultgeogroup:{type:Object},
        geographygroup:{type:Object},
        geographyregion:{type:Object},
        currency:{type:Object},
        geographycity:{type:Object}
		
});




// Duplicate the ID field.
geo.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
geo.set('toJSON', {
    virtuals: true
});




geo.plugin(autoIncrement.plugin, {
    model: 'geo',
    field: 'geoid',
    startAt: 1,
    incrementBy: 1
});




module.exports = geo;