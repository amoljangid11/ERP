const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const siteconfig = new Schema({


	siteconfig:{type:Object},
        employeecode:{type:Object},
		currency:{type:Object},
		dateformat:{type:Object},
		time:{type:Object},
		defaulttime:{type:Object},
		country3:{type:Object},
		state3:{type:Object},
		city2:{type:Object},
		defaultpassword:{type:Object},
		employeestatus:{type:String},
		postalcode:{type:Object},
        description:{type:Object},
        site:{type:Object}


});




// Duplicate the ID field.
siteconfig.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
siteconfig.set('toJSON', {
    virtuals: true
});




siteconfig.plugin(autoIncrement.plugin, {
    model: 'siteconfig',
    field: 'siteconfigid',
    startAt: 1,
    incrementBy: 1
});




module.exports = siteconfig;