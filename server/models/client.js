const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
 autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const client = new Schema({
        
        clients:{type:Object},
        // clientname:{type:Object},
		// cemail:{type:Object},
        // caddress:{type:Object},
        // Phone_number:{type:Object},
        // country:{type:Object},
        // state:{type:Object},
        // fax:{type:Object},
        // Point_of_contact:{type:Object}
        
});

// Duplicate the ID field.
client.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
client.set('toJSON', {
    virtuals: true
});


client.plugin(autoIncrement.plugin, {
    model: 'client',
    field: 'clientid',
    startAt: 1,
    incrementBy: 1
});




module.exports = client;